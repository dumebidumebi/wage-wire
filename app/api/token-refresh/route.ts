
import TokenRefresh from "@/lib/TokenRefresh"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
    console.log('body from token-refresh:', body);
    const data = await TokenRefresh(body.refresh_token)
    
    return new Response(JSON.stringify(data))
}