// "use server"
import { redirect } from 'next/navigation'

export default async function CompanyOnboarding() {
    
    const company_uuid = "274b84c2-c1dd-4a3c-9294-a2f3790dc22a"
    const accessToken = "JeRypTq_giePjDF1DYV8MtrAKyOnDtnHlMyMt8PRdFo"
    const url = `https://api.gusto-demo.com/v1/companies/${company_uuid}/flows`;

  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
      'X-Gusto-API-Version': '2023-12-01'
    },
    body: JSON.stringify({
      flow_type: 'company_onboarding'
    })
  };
  
  const data = await fetch(url, options)
    .then(res =>  res.json())
    .catch(err => console.error('error:' + err));

return data
}
