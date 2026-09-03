

const mongoose= require('mongoose')
const reviewModel= new mongoose.Schema({
  
    userId:{
type: mongoose.Types.ObjectId,required:true['user Id is  Required']
    },
    productId:{
type: mongoose.Types.ObjectId,required:true['product Id is  Required']
    },
    color:{
        type:String, required:true['color is required']
    },
    des:{
        type:String, required:true['description is required']
    },
    rating:{
        type:String, required:true['rating is required']
    }
},{timestamps:true})

const Review= mongoose.model('reviews',reviewModel)

module.exports= Review