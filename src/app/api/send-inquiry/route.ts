import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your email service here
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const {
      fullName,
      email,
      mobileNumber,
      connectionType,
      requirements,
    } = formData;

    // Build HTML email template
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #e2e8f0; border-radius: 8px; }
    .header { background-color: #f5d1d8; color: black; padding: 15px 20px; border-radius: 6px 6px 0 0; margin-bottom: 20px; }
    .content { background-color: white; padding: 20px; border-radius: 0 0 6px 6px; border: 1px solid #edf2f7; }
    .section { margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px dashed #edf2f7; }
    .section:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
    .label { font-size: 12px; font-weight: bold; color: #718096; text-transform: uppercase; margin-bottom: 4px; }
    .value { font-size: 14px; color: #2d3748; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; font-size: 18px; font-weight: 600;">New Business Inquiry</h2>
    </div>
    <div class="content">
      <div class="section">
        <div class="label">Full Name:</div>
        <div class="value">${fullName}</div>
      </div>

      <div class="section">
        <div class="label">Email Address:</div>
        <div class="value">${email}</div>
      </div>

      <div class="section">
        <div class="label">Phone / Mobile Number:</div>
        <div class="value">${mobileNumber}</div>
      </div>

      <div class="section">
        <div class="label">Connected Team:</div>
        <div class="value" style="font-weight: 600; color: #0b5c5a;">${connectionType}</div>
      </div>

      <div class="section">
        <div class="label">Requirement Brief:</div>
        <div class="value" style="white-space: pre-wrap;">${requirements}</div>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Standardized routing options directly to your specified admin accounts
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'businesshead@harleys.com',
      cc: 'digital@harleys.com',
      subject: `[${connectionType}] New Submission from ${fullName}`,
      html: emailContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Inquiry sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
