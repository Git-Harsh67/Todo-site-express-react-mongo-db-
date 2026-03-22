const mongoose = require("mongoose")

const todoDetails = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    task: {
        type: String,
        require: true,
    }

})

module.exports = mongoose.model("Todo", todoDetails)
