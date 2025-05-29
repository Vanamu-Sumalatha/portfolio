const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/submit", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    // Log incoming data
    console.log("Received contact form submission:", { name, phone, email, message });

    // Check environment variables
    console.log("ENV variables:", {
      EMAIL_USER: process.env.EMAIL_USER,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    });

    // Save to MongoDB
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();
    console.log("Contact saved to MongoDB");

    // Setup Nodemailer transporter (use SMTP for production)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Admin (Directly from User)
    const adminMailOptions = {
      from: email, // User's email
      replyTo: email,
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: `New Contact Form Submission from ${name}`,
      text: `
You have received a new contact form submission:

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}

Reply directly to this email to respond.
      `,
    };

    // Send the email
    await transporter.sendMail(adminMailOptions);
    console.log("Email sent to admin successfully");

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in contact form submission:", error.message);
    console.error(error.stack);

    res.status(500).json({
      error: "Failed to send message",
      details: error.message,
    });
  }
});

module.exports = router;
