const express = require("express")
const User = require("../models/auth")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(422).json({
                msg: "all fields required"
            })
        }

        const checkExist = await User.findOne({ email })

        if (!checkExist) {

            const hashPassword = await bcrypt.hash(password, 10)

            const user = new User({
                name,
                email,
                password: hashPassword
            })

            await user.save()

            res.status(201).json({
                msg: "sign up completed ",
                user
            })

        }

        res.json({
            msg: "email already exist"
        })

    }
    catch (error) {
        res.status(404).json({
            msg: "something wrong in signUp ",
            error
        })
    }


}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                msg: "All fields required"
            });
        }

        const signedUser = await User.findOne({ email });

        if (!signedUser) {
            return res.status(400).json({
                msg: "Email or password is wrong"
            });
        }

        const checkPassword = await bcrypt.compare(
            password,
            signedUser.password
        );

        if (!checkPassword) {
            return res.status(400).json({
                msg: "Email or password is wrong"
            });
        }

        const token = jwt.sign(
            { id: signedUser._id },
            process.env.JWT_PASSWORD,
            { expiresIn: "7d" }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong in login",
            error
        });
    }
};