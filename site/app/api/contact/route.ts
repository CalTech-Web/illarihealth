import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, plan } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const planLabels: Record<string, string> = {
      concierge: "Concierge Medicine ($300/mo)",
      dpc: "Direct Primary Care ($150/mo)",
      general: "General Inquiry",
    };

    const planLabel = planLabels[plan] || plan;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const emailBody = {
      from: "Illari Health Website <brandon@mail.caltechweb.com>",
      to: ["info@illarihealth.com"],
      cc: ["brandon@caltechweb.com"],
      reply_to: "brandon@caltechweb.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Inquiry from Illari Health Website</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone || "Not provided"}</td></tr>
          <tr><td><strong>Interested In:</strong></td><td>${planLabel}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${message || "No message provided"}</td></tr>
        </table>
      `,
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
