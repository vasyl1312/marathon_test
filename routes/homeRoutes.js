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

router.post("/email", (req, res) => {
  const { option, email } = req.body;

  const msg = {
    to: `${email}`,
    from: `${process.env.EMAIL_FROM}`,
    subject: "Ви обрали тур!",
    html: ` <h1>Привіт</h1>
    <p>Це лист з нашого марафону</p>
    <p>Ви обрали тур: ${option}</p>
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Лист було відправлено!");
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/");
});

function saveClicksToFile(clicks) {
  fs.writeFile("clics.txt", clicks.toString(), (err) => {
    if (err) throw err;
    console.log("Кількість кліків", clicks.toString());
  });
}

module.exports = router;
