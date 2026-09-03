

const mongoose= require('mongoose')
const invoiceModel= new mongoose.Schema({
  
    userId:{
type: mongoose.Types.ObjectId,required:true['user Id is  Required']
    },
    payable:{
type: Number,required:true['product Id is  Required']
    },
    cu_details:{
        type:String, required:true['customer details is required']
    },
    ship_details:{
        type:String, required:true['shipping details is required']
    },
    tran_id:{
        type:String, required:true['transition Id is required']
    },
    val_id:{
        type:String, required:true['val Id is required']
    },
    delivery_status:{
        type:String, required:true['delivery  status is required']
    },
    payment_status:{
        type:String, required:true['payment status is required']
    },
    total:{
        type:String, required:true['total is required']
    },
    vat:{
        type:String, required:true['vat is required']
    },
},{timeseries:true})

const Invoice= mongoose.model('invoices',invoiceModel)

module.exports= Invoice