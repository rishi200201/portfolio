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

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    // Gmail transporter - uses app password stored in env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Thank you email to user
    const userMail = await transporter.sendMail({
      from: `Rishi Portfolio <${process.env.GMAIL_ADDRESS}>`,
      to: email,
      subject: 'Thanks for reaching out!',
      text: `Hi ${name},\n\nThanks for contacting me. I received your message:\n\n"${message}"\n\nI will get back to you soon.\n\nRegards,\nRishi`,
    });

    // Optional copy to owner
    if (process.env.SEND_OWNER_COPY === 'true') {
      await transporter.sendMail({
        from: `Rishi Portfolio <${process.env.GMAIL_ADDRESS}>`,
        to: process.env.GMAIL_ADDRESS,
        subject: 'New portfolio contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
    }

    res.json({ success: true, id: userMail.messageId });
  } catch (err) {
    console.error('Email send failed', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
