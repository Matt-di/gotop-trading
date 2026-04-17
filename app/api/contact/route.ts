import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: validationResult.error.errors.map((err) => err.message),
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = validationResult.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || email,
      to: process.env.CONTACT_EMAIL || "info@gotop.et",
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">GoTop Trading PLC</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          <div style="padding: 30px;">
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 80px;">Name:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Subject:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${subject}</td>
                </tr>
              </table>
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message:</h3>
              <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed;">
                <p style="line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                This message was sent from the GoTop Trading PLC website contact form.
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 5px 0 0 0;">
                Received on: ${new Date().toLocaleString("en-US", {
                  timeZone: "Africa/Addis_Ababa",
                  dateStyle: "full",
                  timeStyle: "short",
                })}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    };

    // Store in database
    try {
      await prisma.contactSubmission.create({
        data: {
          name,
          email,
          subject,
          message,
          ipAddress:
            request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            undefined,
          userAgent: request.headers.get("user-agent") || undefined,
        },
      });
    } catch (dbError) {
      console.error("Database storage error:", dbError);
      // Don't fail the request if database storage fails
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Email configuration not set. Message received:");
      console.log(mailOptions);
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Rate limiting check (basic implementation)
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    console.log(`Contact form submission attempt from IP: ${clientIP}`);

    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
