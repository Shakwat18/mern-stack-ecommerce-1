
const mongoose= require('mongoose')
const CategoryModel= new mongoose.Schema({
   categoryName:{
        type:String, required: true['Category is required']
    },
    categoryImg:{
type: String
    }
},{timeseries:true})

const Category= mongoose.model('categories',CategoryModel)

module.exports= Category