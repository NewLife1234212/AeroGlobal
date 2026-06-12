import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Save to Database via Prisma
    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        name: body.name,
        email: body.email,
        company: body.company || '',
        freightType: body.freightType || 'Sea Freight',
        message: body.message,
      }
    });

    // 2. Send Email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // The sender's email 
        pass: process.env.EMAIL_PASS  // Gmail App Password
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'no-reply@aeroglobal.com',
      to: 'yarmomee014@gmail.com', // Recipient specified by user
      subject: `New Freight Quote Request from ${body.name}`,
      text: `
You have received a new Freight Quote Request.

Name: ${body.name}
Email: ${body.email}
Company: ${body.company || 'N/A'}
Freight Type: ${body.freightType}

Message/Details:
${body.message}
      `,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Freight Quote Request</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
            <p><strong>Freight Type:</strong> <span style="color: #059669; font-weight: bold;">${body.freightType}</span></p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;"/>
            <h3 style="color: #334155; margin-bottom: 10px;">Shipment Details:</h3>
            <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
          </div>
        </div>
      `
    };

    // Attempt to send the email, but don't fail the whole request if email fails
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("EMAIL_USER or EMAIL_PASS is not set in .env. Email was not sent.");
    }

    return NextResponse.json({ 
      success: true,
      message: 'Your quote request has been successfully submitted.',
      id: quoteRequest.id
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
