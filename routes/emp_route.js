let express = require("express");
let router = express.Router();
let { users } = require("../models/users");
router.post("/register", async (req, res) => {
    console.log(req.body);
    let newuser = users(req.body);
    let result = await newuser.save();
    res.send(result);
})
router.post("/login", (req, res) => {
    res.send("login page called");
})
router.post("/view task", (req, res) => {
    res.send("view task  page called");
})
router.post("/updatestatus", (req, res) => {
    res.send("updatestatus page called");
})
module.exports = router;