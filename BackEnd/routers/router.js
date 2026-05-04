const express = require("express")
const router = express.Router()
const { createTodo, getAllTodo, deleteTodo, updateTodo ,userTodo } = require("../controllers/user")
const verifyToken = require("../middleWare/verifyToken")


router.post("/create",verifyToken, createTodo)
router.get("/allTodo", getAllTodo)
router.get("/userTodo",verifyToken, userTodo)
router.delete("/del/:id", deleteTodo)
router.put("/edit/:id", updateTodo)

module.exports = router