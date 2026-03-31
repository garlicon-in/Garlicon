import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('Sending to: garliconandco@gmail.com');

    const { data, error } = await resend.emails.send({
      from: 'Garlicon Contact <contact@garlicon.in>',
      to: 'garliconandco@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New message from your website contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error object:', JSON.stringify(error));
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log('Success! Email ID:', data?.id);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Catch error:', JSON.stringify(error));
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}