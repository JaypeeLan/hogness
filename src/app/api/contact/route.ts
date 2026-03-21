import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, organization, service, orgType, timeline, description } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !organization || !service || !orgType) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for the admin
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'laniranjohnpault@gmail.com', // Using the provided test email as the recipient
      subject: `New Service Request from ${fullName}`,
      text: `
        New Service Request Details:
        
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Organization: ${organization}
        Organization Type: ${orgType}
        Service Interested In: ${service}
        Timeline: ${timeline || 'Not specified'}
        
        Description:
        ${description || 'No description provided'}
      `,
      html: `
        <h3>New Service Request Details</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Organization Type:</strong> ${orgType}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <br>
        <p><strong>Description:</strong></p>
        <p>${description || 'No description provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Service request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send service request', error: (error as Error).message },
      { status: 500 }
    );
  }
}
