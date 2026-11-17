require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Authentication Server is Running");
});

// Start Server
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();