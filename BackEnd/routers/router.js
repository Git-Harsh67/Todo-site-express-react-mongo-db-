const express = require("express")
const router = express.Router()
const {createTodo , getAllTodo  , deleteTodo, updateTodo } = require("../controllers/user")

router.post("/create" , createTodo)
router.get("/allTodo" , getAllTodo)
router.delete("/del/:id" , deleteTodo)
router.put("/edit/:id" , updateTodo)

module.exports = router