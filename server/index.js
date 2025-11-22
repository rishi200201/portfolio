import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Contact form endpoint - now just logs and acknowledges
// Actual messaging happens via WhatsApp redirect on frontend
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'Message too long.' });
  }

  try {
    // Log the contact attempt for tracking
    console.log('Contact form submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('---');

    res.json({ success: true, message: 'Contact request received. Redirecting to WhatsApp...' });
  } catch (err) {
    console.error('Contact form error:', err.message);
    res.status(500).json({ error: 'Failed to process contact request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
