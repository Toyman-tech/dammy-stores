import { NextResponse } from "next/server";

// POST /api/order
export async function POST(req: Request) {
  try {
    // Use server-only env var. Do NOT expose API keys via NEXT_PUBLIC_*
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = "olaboded78@gmail.com"; // recipient as requested

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured. Set RESEND_API_KEY in environment." },
        { status: 500 }
      );
    }

    const data = await req.json();
    const {
      selectedPackage,
      packageDetails, // description, price, originalPrice, savings
      formData, // firstName, lastName, email, phone, address, city, state, zipCode
    } = data || {};

    if (!formData || !selectedPackage || !packageDetails) {
      return NextResponse.json(
        { error: "Invalid payload. Missing formData or package details." },
        { status: 400 }
      );
    }

    const fullName = `${formData.firstName ?? ""} ${formData.lastName ?? ""}`.trim();

    const subject = `New Order: ${selectedPackage.name} from ${fullName || "Unknown Customer"}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2>New Order Inquiry</h2>
        <h3>Customer</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${formData.email || 'Not provided'}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>WhatsApp:</strong> ${formData.whatsappNo || 'Not provided'}</li>
          <li><strong>Address:</strong> ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}</li>
        </ul>
        <h3>Selected Package</h3>
        <ul>
          <li><strong>Plan:</strong> ${selectedPackage.name}</li>
          <li><strong>Description:</strong> ${packageDetails.description}</li>
          <li><strong>Price:</strong> ₦${Number(packageDetails.price).toLocaleString()}</li>
          <li><strong>Original:</strong> ₦${Number(packageDetails.originalPrice).toLocaleString()}</li>
          <li><strong>Savings:</strong> ₦${Number(packageDetails.savings).toLocaleString()}</li>
        </ul>
         <h3>Selected Order Details</h3>
        <ul>
          <li><strong>Availability:</strong> ${formData.availability}</li>
       </ul>
        <p>Submitted at: ${new Date().toISOString()}</p>
      </div>
    `;

    // Send via Resend REST API (no SDK required)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Use a valid sender. Either verify your own domain in Resend and set it here,
        // or temporarily use the onboarding sender.
        from: "Kadima Shop <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      let errJson: any = null;
      try { errJson = JSON.parse(errText); } catch {}
      return NextResponse.json({ error: "Failed to send email", details: errJson || errText || { status: res.status } }, { status: 502 });
    }

    const json = await res.json();
    return NextResponse.json({ ok: true, id: json.id });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message ?? "Unknown error" }, { status: 500 });
  }
}
