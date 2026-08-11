

const mongoose= require('mongoose')
const userModel= new mongoose.Schema({
    email:{
        type:String,required:true['email is  Required'],unique:true['email must be unique']
    },
    otp:{
type: String,required:true['otp is  Required']
    }
},{timeseries:true})

const User= mongoose.model('users',userModel)

module.exports= User