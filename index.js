const express = require("express");
const router = require("./routs/user.profile");
const connect = require("./config/db");
const cookies= require("cookie-parser");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cookies());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/profile",router)
app.listen(8050, () => {
  connect();
  console.log("listening on port 8050");
});

