const express = require("express");
const contact = require("./src/contact");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const whitelist = [
  "https://muidev.me",
  "http://localhost:5173",
  "http://localhost:3000",
];
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
require("dotenv").config();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(cors(corsOptions));
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(contact);
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(process.env.PORT, () => {
  console.log("Server is listening to port " + process.env.PORT);
});
