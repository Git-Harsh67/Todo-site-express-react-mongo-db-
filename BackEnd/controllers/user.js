const express = require("express")
const Todo = require("../models/user")


// create 
exports.createTodo = async (req,res)=>{
try {
    const todo = new Todo({
        title: "4",
        task : "this is the content of todo 4"
    })

    await todo.save()

    res.status(201).json({
        todo
    })
    
} catch (error) {
    return error
}
}

//show all 
exports.getAllTodo = async (req,res)=>{
    try {
        const todos = await Todo.find()

        res.status(200).json({
            todos
        })
    } catch (error) {
        return error
    }
}

//delete
exports.deleteTodo = async (req,res)=>{
    try {

        const todos = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            todos
        })
    } catch (error) {
        return error
    }
}

//update
