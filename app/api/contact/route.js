// pages/api/contact.js
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Your existing email sending logic here
    const mailOptions = {
      from: 'Portfolio', 
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message From ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      replyTo: email,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Error while sending email' });
    }
  } else {
    res.status(404).json({ message: 'Only POST requests allowed' });
  }
};

export default handler;
