const express = require("express")
const Todo = require("../models/user")


// create 
exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
            task: req.body.task
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
exports.getAllTodo = async (req, res) => {
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
exports.deleteTodo = async (req, res) => {
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
exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.status(200).json({
            todo
        })

    } catch (error) {
        return error
    }
}