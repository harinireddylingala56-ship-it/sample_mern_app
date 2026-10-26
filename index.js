let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let app = express();
let hrRoutes = require("./routes/hr_route");
let empRoutes = require("./routes/emp_route");
app.use(express.json());
app.use(cors());
app.use("/api/emp", empRoutes);
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
    console.log("Server running on http://localhost:3000");
});