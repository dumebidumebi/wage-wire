import CreateCompany from "@/lib/CreateCompany"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
 
  const data = await CreateCompany(body)

  return new Response(JSON.stringify(data))
}