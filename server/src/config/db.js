const mongoose = require("mongoose");

const connect = ()=>{
    try {
        return mongoose.connect("mongodb+srv://sharan:sharan@cluster0.t89lb.mongodb.net/test")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connect;