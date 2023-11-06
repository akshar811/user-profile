const { Router } = require("express")
const { display, Profile, findprofile, displaylogin, login, createuser, displaysignup, signup } = require("../controller/user.profile")
const { finduser } = require("../middlewares/user.middleware")

const router = Router()

router.get("/",finduser,display);

router.post("/create",Profile);

router.get("/profiles",findprofile);

router.get("/login",displaylogin);

router.post("/login", login);

router.post("/",createuser);

router.get("/signup",displaysignup);

router.post("/signup",finduser,signup);

module.exports = router