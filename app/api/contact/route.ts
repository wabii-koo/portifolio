import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("================ CONTACT FORM SUBMISSION ================");
    console.log(`From: ${name} (${email})`);
    console.log(`Message: ${message}`);
    console.log("========================================================");

    // Placeholder for actual email dispatch (e.g. Resend, SendGrid, or Nodemailer)
    // If developer sets up environment variables, dispatch them here securely.
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      // Example dispatch using standard fetch to Resend API
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "webiikoo@gmail.com",
          subject: `New Portfolio Message from ${name}`,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong></p>
                 <p>${message.replace(/\n/g, "<br/>")}</p>`,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend API error:", err);
        throw new Error("Failed to send email via provider.");
      }
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API routing error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
