const user = require("../models/user.schema");

const finduser = async (req, res, next) => {
    let { id } = req.cookies;
    console.log(id);
    if (id) {
      let data = await user.findById(id);
      console.log(data);
      if (data.username == "akshar") {
        return next();
      } else {
        return res.send("Couldn't find");
      }
    } else {
      res.redirect("/profile/login");
    }
  };
  
  module.exports = { finduser };
  