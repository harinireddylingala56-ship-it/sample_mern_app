const express = require("express");
const mongoose = require("mongoose");

const app = express();
const hrRoutes = require("./routes/hr_route");
const empRoutes = require("./routes/emp_route");
app.use(express.json());
app.use("/emp", empRoutes);
app.use("/api/hr", hrRoutes);
mongoose
    .connect("mongodb://127.0.0.1:27017/hrmanagement")
    .then(() => {
        console.log("connected with mongodb database");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
app.get("/", (req, res) => {
    res.send("HR Management Backend is running");
});
app.listen(3000, () => {
    console.log("server listening on port 3000");
});