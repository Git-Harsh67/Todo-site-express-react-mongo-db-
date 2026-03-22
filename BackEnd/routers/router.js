const express = require("express")
const router = express.Router()
const {createTodo , getAllTodo  , deleteTodo} = require("../controllers/user")

router.post("/create" , createTodo)
router.get("/allTodo" , getAllTodo)
router.get("/del/:id" , deleteTodo)

module.exports = router