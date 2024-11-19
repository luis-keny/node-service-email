const express = require("express");
const app = express();

let send = require("../controllers/emailController");

app.post("/v1/send", send.sendEmail);

module.exports = app;
