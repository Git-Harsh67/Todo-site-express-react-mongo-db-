require('dotenv').config()
const express = require("express")
const dataBase = require("./config/mongoDB")
// const jwt = require("jsonwebtoken")
const app = express()

dataBase()
app.use(express.json())

// app.get("/api/todo",(req,res)=>{
//     res.send("hello")
// })

app.use("/api/todo", require("./routers/router"))


const Port = 3000
app.listen(Port , ()=>{
    console.log("server is on")
})

