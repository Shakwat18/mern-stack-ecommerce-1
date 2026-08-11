

const mongoose= require('mongoose')
const featuresModel= new mongoose.Schema({
  
 
    name:{
        type:String, required:true['name is required']
    },
    des:{
        type:String, required:true['des is required']
    },
    img:{
        type:String, required:true['img is required']
    }
},{timeseries:true})

const Features= mongoose.model('features',featuresModel)

module.exports= Features