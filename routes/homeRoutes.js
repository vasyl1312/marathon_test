const { Router } = require("express");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
require("dotenv").config();

sgMail.setApiKey(`${process.env.API_KEY}`);
const router = new Router();

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
