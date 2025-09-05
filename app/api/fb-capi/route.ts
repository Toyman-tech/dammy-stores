import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import crypto from "crypto"

const PIXEL_ID = "737796992460675"
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN

// Function to hash email/phone for privacy
function hashData(data: string): string {
  if (!data) return '';
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex')
}

// Function to get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  // Fallback to connection remote address
  return '127.0.0.1'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Get client IP from request
    const clientIP = getClientIP(req)
    
    // Prepare user data with better matching parameters
    const userData: any = {
      client_ip_address: clientIP,
      client_user_agent: body.ua || req.headers.get('user-agent') || '',
    }
    
    // Add email if provided (hashed for privacy)
    if (body.email) {
      userData.em = [hashData(body.email)]
    }
    
    // Add phone if provided (hashed for privacy)
    if (body.phone) {
      userData.ph = [hashData(body.phone)]
    }
    
    // Add external ID if available (like order number)
    if (body.external_id) {
      userData.external_id = [body.external_id]
    }

    const eventData = {
      data: [
        {
          event_name: body.event || "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: body.source_url || "https://yourdomain.com",
          user_data: userData,
          custom_data: {
            value: body.value || 0,
            currency: body.currency || "NGN",
            content_name: body.content_name || "",
            order_id: body.order_id || "",
          },
        },
      ],
    }

    console.log('📤 Sending to Facebook:', JSON.stringify(eventData, null, 2))

    const response = await fetch(
      `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      }
    )

    const data = await response.json()
    
    if (!response.ok) {
      console.error('❌ Facebook API Error:', data)
      return NextResponse.json({ error: data }, { status: response.status })
    }
    
    console.log('✅ Facebook API Success:', data)
    return NextResponse.json(data)
    
  } catch (error) {
    console.error('❌ Server Error:', error)
    return NextResponse.json({ 
      error: { message: 'Internal server error', details: error } 
    }, { status: 500 })
  }
}