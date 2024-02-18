import { SignedIn, RedirectToOrganizationProfile, SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <>
    <SignIn redirectUrl={"https://finer-sailfish-38.accounts.dev/organization"} />
    </>
  );
}

export default SignInPage;