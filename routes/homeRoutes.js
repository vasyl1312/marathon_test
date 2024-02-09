const { Router } = require("express");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
require("dotenv").config();

sgMail.setApiKey(`${process.env.API_KEY}`);
const router = new Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/handleClick", (req, res) => {
  const { clicks } = req.body;
  saveClicksToFile(clicks);
  res.sendStatus(200);
});

function saveClicksToFile(clicks) {
  fs.writeFile("clickCount.txt", clicks.toString(), (err) => {
    if (err) throw err;
    console.log("Кількість кліків збережено в файлі", clicks.toString());
  });
}

module.exports = router;
