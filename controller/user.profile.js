const profile = require("../models/profile.schema");
const user = require("../models/user.schema");

const Profile = async (req, res) => {
  let data = await profile.create(req.body);
  res.send(data);
};

const display = (req, res) => {
  res.render("profile");
};

const findprofile = async (req, res) => {
  let data = await profile.find();
  res.send(data);
};

const displaylogin = (req, res) => {
  res.render("login");
};

const createuser = async (req, res) => {
  let data = await user.create(req.body);
  res.send(data);
};

const login = async (req, res) => {
  let { username, password } = req.body;
  let data = await user.findOne({ username: username });
  if (!data) {
    return res.send("user not found");
  }
  if (data.password != password) {
    return res.send("wrong password");
  }
  res.cookie("id",data.id).send("successfully login");
};


const displaysignup = (req, res) => {
  res.render("signup");
};

const signup = async (req, res) => {
  let data = await user.create(req.body);
  res.send(data);
}




module.exports = { display, Profile, findprofile, displaylogin , login , createuser , displaysignup , signup };
