require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// ✅ CORS Configuration (Supports Multiple Origins for Development & Production)
const allowedOrigins = ["https://portfolio-frontend-3t0b.onrender.com", "http://localhost:3000"];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ✅ Built-in Middleware (Replaces bodyParser)
app.use(express.json());

// ✅ Root Route (Check if Backend is Running)
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// ✅ Connect to MongoDB with Proper Error Handling
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ✅ Routes
app.use("/api/contact", contactRoutes);

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message || err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

app.use((req, res, next) => {
  console.log(`🔍 Received Request: ${req.method} ${req.url}`);
  next();
});


// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

