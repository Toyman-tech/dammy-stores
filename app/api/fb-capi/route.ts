import { NextResponse } from "next/server"

const PIXEL_ID = "737796992460675"
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN

export async function POST(req: Request) {
  const body = await req.json()

  const eventData = {
    data: [
      {
        event_name: body.event || "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        user_data: {
          client_ip_address: body.ip || "",
          client_user_agent: body.ua || "",
          em: body.email ? [body.email] : undefined, // hash in production
        },
        custom_data: {
          value: body.value || 0,
          currency: body.currency || "USD",
        },
      },
    ],
  }

  const response = await fetch(
    `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }
  )

  const data = await response.json()
  return NextResponse.json(data)
}
