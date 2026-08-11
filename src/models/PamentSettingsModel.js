

const mongoose= require('mongoose')
const paymentSettingsModel= new mongoose.Schema({
  
    userId:{
type: mongoose.Types.ObjectId,required:true['user Id is  Required']
    },
    productId:{
type: mongoose.Types.ObjectId,required:true['product Id is  Required']
    },
    color:{
        type:String, required:true['color is required']
    },
    qty:{
        type:String, required:true['quantity is required']
    },
    size:{
        type:String, required:true['size is required']
    }
},{timeseries:true})

const PaymentSettings= mongoose.model('paymentSettings',paymentSettingsModel)

module.exports= PaymentSettings