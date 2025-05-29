const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/submit", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

    // Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Admin (Directly from User)
    const adminMailOptions = {
      from: email, // The user's email
      replyTo: email, // Admin can reply directly to user
      to: process.env.ADMIN_EMAIL, // Admin email from .env
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}\n\nReply directly to this email to respond.`,
    };

    // Send Email to Admin
    await transporter.sendMail(adminMailOptions);

    res.json({ message: "Message sent to admin successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
