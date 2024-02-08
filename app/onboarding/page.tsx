
import { redirect } from 'next/navigation'
import CompanyOnboarding from '@/lib/CompanyOnboarding'

export default async function page() {

  const data = await CompanyOnboarding()
  console.log(`console log: ${data.url}`)
  redirect(`${data.url}`)
  return (
    <>
    </>
  )
}
