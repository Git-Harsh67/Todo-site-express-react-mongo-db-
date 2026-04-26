const express = require("express")
const User = require("../models/auth")
const bcrypt = require("bcrypt")

exports.signUp = async (req, res) => {
    const {name , email , password} = req.body
    
    if (!name || !email || !password){
        res.status(422).json({
            msg : "all fields required"
        })
    }

     const hashPassword = await bcrypt.hash(password , 10 ) 
    
    // const user = new User({
    //     name,
    //     email,
    //     password
    // })

    // await user.save()

    res.status(201).json({
        msg : "sign up completed ",
        hashPassword
        // user
    })
 } 