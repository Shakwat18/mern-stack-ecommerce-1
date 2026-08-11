

const mongoose= require('mongoose')
const invoiceProductModel= new mongoose.Schema({
  
    userId:{
type: mongoose.Types.ObjectId,required:true['user Id is  Required']
    },
    productId:{
type: mongoose.Types.ObjectId,required:true['product Id is  Required']
    },
    invoiceId:{
type: mongoose.Types.ObjectId,required:true['invoice Id is  Required']
    },
    color:{
        type:String, required:true['color is required']
    },
    qty:{
        type:String, required:true['quantity is required']
    },
    price:{
        type:String, required:true['price is required']
    },
    size:{
        type:String, required:true['size is required']
    }
},{timeseries:true})

const InvoiceProduct= mongoose.model('invoiceProducts',invoiceProductModel)

module.exports= InvoiceProduct