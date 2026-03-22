
const mongoose = require("mongoose")

async function dataBase() {
    try {
        await mongoose.connect(process.env.mongo_URL)
        console.log("db connected");
        
    } catch (error) {
        return (
            console.log("database not connected"),
            console.log(error)
        )
    }
}

module.exports = dataBase

// qwertyuiop