require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { server } = require("./src/config/config");
const bodyParser = require("body-parser");
const bookingRoutes = require("./src/routes/booking");

const app = express();

// 🔥 เพิ่มขนาดของ JSON request body (เป็น 50MB หรือมากกว่านั้น)
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors()); // เปิดใช้งาน CORS หลังจากประกาศ app
app.use(express.json()); // ให้แอพสามารถรับ JSON ได้
app.use(express.urlencoded({ extended: true })); // ให้แอพสามารถรับ URL-encoded data ได้

app.use('/api/booking', bookingRoutes);  // /api/booking จะใช้ route ที่กำหนดใน booking.js

app.listen(server.port, () => {
    console.log(`🚀 Server running on port ${server.port}`);
});