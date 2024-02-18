import { error } from "console";
import CompanyOnboarding from "./CompanyOnboarding";
// This function is responsible for refreshing the access token using the provided refresh token.
// It takes the refresh token as a parameter and returns the refreshed token data.
export default async function TokenRefresh(refresh_token: string) {
  // Log that token refresh process has started
  console.log('Starting token refresh...');

  // Construct the URL for the Gusto API endpoint to refresh the token
  const url = 'https://api.gusto-demo.com/oauth/token';

  // Configure options for the fetch request
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'Authorization': `Token ${process.env.GUSTO_API_TOKEN}`,
      'X-Gusto-API-Version': '2023-12-01',
    },
    body: JSON.stringify({
      'client_id': `${process.env.GUSTO_CLIENT_ID}`,
      'client_secret': `${process.env.GUSTO_SECRET}`,
      'redirect_uri': 'https://localhost:3000',
      'refresh_token': `${refresh_token}`,
      'grant_type': 'refresh_token'
    })
  };

  // Log that token data is being fetched
  console.log('Fetching token data...');

  // Send the request to fetch token data
  const data = await fetch(url, options)
    .then(res => res.json()) // Parse the JSON response
    .catch(err => {
      // Log and throw an error if fetching token data fails
      console.error('Error fetching token data:', err);
      throw err; // Rethrow the error to be caught by the caller
    });

  // Log that token data is being stored in localStorage
  console.log('Storing token data in localStorage...');

  // implement context or universal state management

  // Extract the access token from the token data
  const { access_token } =  data

  // Check if access token is obtained
  if (data && access_token) {
    return data
  } else return null
}
