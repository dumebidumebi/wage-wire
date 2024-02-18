
import CompanyOnboarding from "@/lib/CompanyOnboarding"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('body from companyonboarding:', body);
  if(body?.refreshedAccess){
  const data = await CompanyOnboarding(body.companyInfo, body.refreshedAccess)
  return new Response(JSON.stringify(data))
  }else{
    const data = await CompanyOnboarding(body.companyInfo, null)
    return new Response(JSON.stringify(data))
  }
}