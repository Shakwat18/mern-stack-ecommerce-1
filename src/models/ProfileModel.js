

const mongoose= require('mongoose')
const ProfileModel= new mongoose.Schema({
    UserId:{
        type:mongoose.Types.ObjectId,required:true['userId is  Required']
    },
    cu_add:{
type: String,required:true['customer address is  Required']
    },
    cu_city:{
type: String,required:true['customer city is  Required']
    },
    cu_country:{
type: String,required:true['customer country is  Required']
    },
    cu_name:{
type: String,required:true['customer name is  Required']
    },
    cu_phone:{
type: String,required:true['customer phone is  Required']
    },
    cu_state:{
type: String,required:true['customer state is  Required']
    },
    cu_postcode:{
type: String,required:true['customer postcode is  Required']
    },
   
    ship_add:{
type: String,required:true['shipping address is  Required']
    },
    ship_city:{
type: String,required:true['shipping city is  Required']
    },
    ship_country:{
type: String,required:true['shipping country is  Required']
    },
    ship_name:{
type: String,required:true['shipping name is  Required']
    },
    ship_phone:{
type: String,required:true['shipping phone is  Required']
    },
    ship_postcode:{
type: String,required:true['shipping postcode is  Required']
    },
    ship_state:{
type: String,required:true['shipping state is  Required']
    },
   
},{timeseries:true})

const Profile= mongoose.model('profiles',ProfileModel)

module.exports= Profile