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
      quantity,
      dateOfRequirement,
      event,
      referenceImage,
      requirements,
    } = formData;

    // Build email content based on connection type
    let emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
    .header { background-color: #f5d1d8; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .content { background-color: white; padding: 20px; border-radius: 5px; }
    .section { margin-bottom: 15px; }
    .label { font-weight: bold; color: #4A4A4A; }
    .value { color: #666; margin-top: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="color: #4A4A4A; margin: 0;">New Business Inquiry</h2>
    </div>
    <div class="content">
      <div class="section">
        <div class="label">Full Name:</div>
        <div class="value">${fullName}</div>
      </div>

      <div class="section">
        <div class="label">Email:</div>
        <div class="value">${email}</div>
      </div>

      <div class="section">
        <div class="label">Mobile Number:</div>
        <div class="value">${mobileNumber}</div>
      </div>

      <div class="section">
        <div class="label">Connection Type:</div>
        <div class="value">${connectionType}</div>
      </div>
    `;

    // Add conditional content based on connection type
    if (connectionType === 'Customised Cakes') {
      emailContent += `
      <div class="section">
        <div class="label">Quantity of Cake:</div>
        <div class="value">${quantity}</div>
      </div>

      <div class="section">
        <div class="label">Date of Requirement:</div>
        <div class="value">${dateOfRequirement}</div>
      </div>

      <div class="section">
        <div class="label">Event:</div>
        <div class="value">${event}</div>
      </div>

      <div class="section">
        <div class="label">Reference Image:</div>
        <div class="value">Attached as separate file</div>
      </div>
      `;
    } else {
      emailContent += `
      <div class="section">
        <div class="label">Requirements:</div>
        <div class="value">${requirements}</div>
      </div>
      `;
    }

    emailContent += `
    </div>
  </div>
</body>
</html>
    `;

    const mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: 'techintern@harleys.com',
      subject: `New Business Inquiry - ${connectionType}`,
      html: emailContent,
      replyTo: email,
    };

    // If there's a reference image, handle file attachment
    if (connectionType === 'Customised Cakes' && referenceImage) {
      try {
        // The referenceImage should be a base64 string from the form
        const base64Data = referenceImage.split(',')[1];
        const buffer = Buffer.from(base64Data, 'base64');

        mailOptions.attachments = [
          {
            filename: `reference-image-${Date.now()}.png`,
            content: buffer,
          },
        ];
      } catch (err) {
        console.error('Error processing image:', err);
      }
    }

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
