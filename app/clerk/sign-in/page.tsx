"use client"

import { SignIn } from "@clerk/nextjs";

function SignInPage() {
return (
  <>
  <div className="flex justify-center">
  <SignIn afterSignInUrl="/clerk/create-org"></SignIn>
  </div>
  </>
)
}

export default SignInPage;