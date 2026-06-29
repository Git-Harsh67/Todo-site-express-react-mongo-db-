require('dotenv').config()
const express = require("express")
const dataBase = require("./config/mongoDB")
const cors = require("cors")
// const jwt = require("jsonwebtoken")
const app = express()

dataBase()
app.use(express.json())
app.use(cors({
  origin: 'https://todo-frontend-dk35.onrender.com'
}))

// app.get("/api/todo",(req,res)=>{
//     res.send("hello")
// })

app.use("/api/todo", require("./routers/router"))
app.use("/api/auth", require("./routers/auth"))

const Port = 3000
app.listen(Port , ()=>{
    console.log("server is on")
})

