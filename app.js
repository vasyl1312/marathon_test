const express = require("express");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/homeRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/views"));
app.use("/images", express.static(__dirname + "/images"));

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use("/", homeRoutes);

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}\nhttp://localhost:${port}`);
});
