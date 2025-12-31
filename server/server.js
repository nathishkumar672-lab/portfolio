require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Restrict to frontend dev server
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());

// Verify Env Vars
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  WARNING: EMAIL_USER or EMAIL_PASS is missing in .env file');
} else {
    console.log('✅ Email configuration loaded');
}

// Content route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Create transporter
    // NOTE: In production, use environment variables for these values.
    // For Gmail, you might need an App Password.
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Authenticated sender
        replyTo: email, // The user's email to reply to
        to: process.env.EMAIL_USER, // Your email address
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Message:
${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
