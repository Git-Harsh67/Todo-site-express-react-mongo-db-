const express = require("express")
const router = express.Router()
const { createTodo, getAllTodo, deleteTodo, updateTodo } = require("../controllers/user")
// const verifyToken = require("../middleWare/verifyToken")

router.post("/create", createTodo)
router.get("/allTodo", getAllTodo)
router.delete("/del/:id", deleteTodo)
router.put("/edit/:id", updateTodo)

module.exports = router