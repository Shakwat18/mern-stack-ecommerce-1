const { default: mongoose } = require("mongoose")
require('dotenv').config()

const connectDb=()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('db is connceted in localhost')
    } catch (error) {
       console.log('db is not connected', error.message) 
    }
}

module.exports= connectDb