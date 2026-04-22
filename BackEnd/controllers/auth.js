const express = require("express")
const User = require("../models/auth")

exports.signUp = async (req, res) => {
    const {name , email , password} = req.body
    
    if (!name || !email || !password){
        res.status(422).json({
            msg : "all fields required"
        })
    }

    res.status(201).json({
        name,
        email,
        password
    })
 } 