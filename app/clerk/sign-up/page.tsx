import { SignUp } from "@clerk/nextjs";
 
export default function SignUpPage() {
  return (
  <SignUp redirectUrl={"https://finer-sailfish-38.accounts.dev/create-organization"} />
  )
}