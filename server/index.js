import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'Message too long.' });
  }

  try {
    // Verify environment variables are set
    if (!process.env.GMAIL_ADDRESS || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing environment variables: GMAIL_ADDRESS or GMAIL_APP_PASSWORD');
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, ''), // Remove any spaces
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const userMail = await transporter.sendMail({
      from: `Rishi Portfolio <${process.env.GMAIL_ADDRESS}>`,
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">Hi ${name},</h2>
          <p>Thanks for contacting me through my portfolio. I received your message:</p>
          <div style="background: #f3f4f6; padding: 15px; border-left: 4px solid #06b6d4; margin: 20px 0;">
            <p style="margin: 0;">${message}</p>
          </div>
          <p>I will get back to you as soon as possible!</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>Rishi Kumar</strong></p>
        </div>
      `,
      text: `Hi ${name},\n\nThanks for contacting me. I received your message:\n\n"${message}"\n\nI will get back to you soon.\n\nRegards,\nRishi`,
    });

    console.log('User confirmation email sent:', userMail.messageId);

    if (process.env.SEND_OWNER_COPY === 'true') {
      await transporter.sendMail({
        from: `Rishi Portfolio <${process.env.GMAIL_ADDRESS}>`,
        to: process.env.GMAIL_ADDRESS,
        subject: '📩 New Portfolio Contact Form Submission',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f3f4f6; padding: 15px; border-left: 4px solid #06b6d4; margin: 20px 0;">
              <p style="margin: 0;">${message}</p>
            </div>
          </div>
        `,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      console.log('Owner notification email sent');
    }

    res.json({ success: true, id: userMail.messageId });
  } catch (err) {
    console.error('Email send failed:', err.message);
    console.error('Error details:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
