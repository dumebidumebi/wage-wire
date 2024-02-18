"use client"
import { redirect } from 'next/navigation'
import CompanyOnboarding  from '@/lib/CompanyOnboarding'
import { useEffect, useState } from 'react'
import { useOrganization, useUser } from '@clerk/nextjs';
import CreateCompany from '@/lib/CreateCompany';
import type { UserResource, OrganizationResource } from "@clerk/types";
import { create } from 'zustand';
import TokenRefresh from '@/lib/TokenRefresh';
import { stat } from 'fs';

export interface UserInfo {
  user: UserResource | null|undefined,
  organization: OrganizationResource|null|undefined,
}
export interface CompanyInfo {
  company_uuid: string;
  access_token: string;
  refresh_token: string;
}
export type Data = {
  url?: string;
  expires_at?: string;
  status?: number;
}
type UseStore = {
  companyInfo: CompanyInfo | null,
  userInfo: object ,
  setCompanyInfo: (companyInfo: CompanyInfo) => void;
};

export default function Page() {
  const { organization } = useOrganization();
  const { user } = useUser();
  const userInfo =  { user: user, organization: organization };
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    // get from localstorage
    const loading =  async () => {
    const storedState = localStorage.getItem("stored-company-info")
    const initialState = JSON.parse(storedState)

      // put in state
    if(initialState?.company_uuid ){

      setCompanyInfo(prev => {
        return {...initialState}
      });

    }else{
      
        const createdCompanyInfo = await fetch("/api/create-company", {
          method: "POST",
          body: JSON.stringify(userInfo),
        }).then((res) => {
          console.log("res",res)
          const temp: CompanyInfo = res.json();
        
          return temp;
        });
        console.log("Created company info:", createdCompanyInfo);
        setCompanyInfo(createdCompanyInfo);
        fetchData(companyInfo, userInfo);
    }
  }
  loading()
  })

  useEffect(() => {
    // store in localstorage
    console.log("Storing company info in local storage:", companyInfo)
    // localStorage.setItem("stored-user-state", JSON.stringify(userInfoState))
    localStorage.setItem("stored-company-info", JSON.stringify(companyInfo))
  }, [companyInfo])



  const fetchData = async (companyInfo:CompanyInfo | null  ,userInfo: object) => {
   console.log("in fetch data function",companyInfo)

      const data = await fetch("/api/company-onboarding", {
        method: "POST",
        body: JSON.stringify({companyInfo: companyInfo, refreshedAccess: null}),
      }).then((res) =>  res.json());


      console.log("Company onboarding data:", data);
      // if 401, refresh token
      if (data && data?.url) {
        console.log("Redirecting to:", data?.url);
        // make state storage for this too
        window.location = data?.url;
      } else if(data?.status === 401){
        const refreshedCompany = await fetch("/api/token-refresh", {
          method: "POST",
          body: JSON.stringify({refresh_token: companyInfo?.refresh_token}),
        }).then((res) =>  res.json());
        // const refreshed  = await TokenRefresh(companyInfo?.refresh_token);
        setCompanyInfo(refreshedCompany)
      }
      else {
        console.error("No URL found in company onboarding data");
      }
  };
  

  // rerun if state changes ie company info changes

  return (
    <div>onboarding</div>
  );
}
