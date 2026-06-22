const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const inquiryRoutes = require("./routes/inquiryRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/inquiries", inquiryRoutes);

app.get("/", (req, res) => {
  res.send("Global Exim Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});