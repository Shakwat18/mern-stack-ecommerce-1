

const mongoose= require('mongoose')
const wishListModel= new mongoose.Schema({
  
    userId:{
type: mongoose.Types.ObjectId,required:true['user Id is  Required']
    },
    productId:{
type: mongoose.Types.ObjectId,required:true['product Id is  Required']
    },
},{timeseries:true})

const WishList= mongoose.model('wishLists',wishListModel)

module.exports= WishList