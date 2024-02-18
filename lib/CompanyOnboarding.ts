import { CompanyInfo, Data } from "@/app/onboarding/page";
import { ApproveDemoCompany } from "./CreateCompany";

// This function is responsible for handling the onboarding process for a company.
export default async function CompanyOnboarding(Info: CompanyInfo | null, refreshedAccess: string | null): Promise<Data | null> {
  // Get company info from local storage

  let company_uuid: string;
  let accessToken: string;
  let refresh_token: string;

    // If company info is available, extract company UUID, access token, and refresh token from it
    if(Info){
      const companyInfo: CompanyInfo = Info;
      company_uuid = companyInfo?.company_uuid;
      accessToken = companyInfo?.access_token;
      refresh_token = companyInfo?.refresh_token;
      
    console.log('company_uuid:', company_uuid);
    console.log('accessToken:', accessToken);
    
  const url = `https://api.gusto-demo.com/v1/companies/${company_uuid}/flows`;

  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'authorization': `Bearer ${refreshedAccess ? refreshedAccess : accessToken}`,
      'X-Gusto-API-Version': '2023-12-01'
    },
    body: JSON.stringify({
      flow_type: 'company_onboarding'
    })
  };

  const data = await fetch(url, options)
    .then(async res => {
      if (res.status === 401) {
        return {status: res.status}
      }
      // Parse and return the JSON response
      else return res.json();
    })
    .catch(err => console.error('error:' + err));

  console.log('data:', data);
  return data;
    }
    else return null;
}
