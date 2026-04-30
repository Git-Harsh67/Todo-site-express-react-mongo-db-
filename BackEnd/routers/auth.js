const express = require("express")
const {signUp , login} = require("../controllers/auth")
const router = express.Router()

router.post("/signUp" , signUp)
router.get("/login" , login)


module.exports = router