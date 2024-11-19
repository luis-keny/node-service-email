const { request, response } = require("express");
const nodeMailer = require("nodemailer");
const templateHTML = require("../utils/templateHTML");
require("dotenv").config();

const sendEmail = (req = request, res = response) => {
  let body = req.body;
  let config = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const option = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: "Recopilación del sorteo",
    html: templateHTML(body.name, body.lastName, body.phonenumber, body.bithday),
  };

  config.sendMail(option, (err, info) => {
    if (err) {
      return res.status(500).json({ ok: false, msg: err });
    } else {
      return res.status(200).json({ ok: true, msg: "Email enviado" });
    }
  });
};

module.exports = { sendEmail };
