import { CreateOrganization } from "@clerk/nextjs";

function CreateOrg() {
  return (
    <CreateOrganization routing="path" path="/clerk/create-org" afterCreateOrganizationUrl={"/onboarding"} />
  )
}

export default CreateOrg