import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const company_uuid = "46429b4b-cc0b-47da-a383-523411d1da4b"
    const url = `https://api.gusto-demo.com/v1/companies/${company_uuid}/flows`;
    const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `961a1f31d0d64127bcc625cfe54c896f178beb0facc5d6af37c8f9052cffbffa`,
        "X-Gusto-API-Version": "2023-12-01",
        "Access-Control-Allow-Origin": 'http://localhost:3000'
    },
    body: JSON.stringify({
        flow_type: 'company_onboarding',
        // entity_type: 'Employee',
        // entity_uuid: '{{employee_uuid}}'
    })
    };

//     fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

//   return NextResponse.json({ data })

try {
    const response = await fetch(url, options);
    
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      // If not ok, throw an error with the status text
      throw new Error(response.statusText);
    }

    const data = await response.json(); // Convert the response to JSON

    // Use NextResponse.json to return a JSON response
    return NextResponse.json({ data });
  } catch (err) {
    // Log the error to the server console
    console.error('Fetch error:', err);

    // Return a JSON response with the error and a status code, e.g., 500 for server error
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }

}