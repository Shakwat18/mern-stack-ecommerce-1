

const mongoose= require('mongoose')
const ProductsDetailsModel= new mongoose.Schema({
    color:{
        type:String,required:true['color is  Required']
    },
   
    size:{
type: String,required:true['size is  Required']
    },
    img1:{
type: String,required:true['img1 is  Required']
    },
    img2:{
type: String,required:true['img2 is  Required']
    },
    img3:{
type: String,required:true['img3 is  Required']
    },
    img4:{
type: String
    },
    img5:{
type: String
    },
    img6:{
type: String
    },
    img7:{
type: String
    },
    img8:{
type: String
    },
    productId:{
type: mongoose.Types.ObjectId,required:true['product Id is  Required']
    },
     des:{
type: String,required:true['description is  Required']
    },
},{timeseries:true})

const ProductsDetails= mongoose.model('productsDetails',ProductsDetailsModel)

module.exports= ProductsDetails