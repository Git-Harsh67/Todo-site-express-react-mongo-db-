const express = require("express")
const jwt = require("jsonwebtoken")
const Todo = require("../models/user")

// create 
exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
            task: req.body.task,
            user : req.user.id
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

exports.userTodo = async (req, res) => {
    try {
        const todos = await Todo.find({user : req.user.id} )
        console.log(todos)
        if (!todos) {
            return res.status(200).json({
                msg: "todo not found"
            })
        }
        res.status(200).json({
            msg: todos
        })
    } catch (error) {
        res.status(500).json({
            msg: "user todo not found",
            error
        })
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
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            task: req.body.task
        })

        res.status(200).json({
            msg: todo
        })

    } catch (error) {
        return error
    }
}