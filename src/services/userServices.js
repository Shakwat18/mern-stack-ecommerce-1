const User = require("../models/UserModel")
const { EncodeToken } = require("../utility/TokenHelper")

const userLoginService=async(req)=>{
const email=req.params['email']
const otp= Math.floor(Math.random()*900000)+100000
 await User.updateOne({email},{$set:{email,otp}},{$Upsert:true})
return {status:'success',message:`6 digit otp is sent ${otp}`}
}

const verifyLoginService=async(req)=>{
const email= req.params['email']
const otp= req.params['otp']
const result = await User.find({email,otp}).countDocuments('total')
console.log(result);
if(result !== 1){
    return {status:"faild",message:"invalid otp"}
}
const data = await User.aggregate([
    {$match:{email,otp}}
])

const token= await EncodeToken(data._id,email)

await User.updateOne({email},{$set:{otp:"0"}})
    return {status:"success",message:"Verified Successfully" , token}


}

const createProfileService=()=>{

}

const updateProfileService=()=>{

}

const readProfileService=()=>{

}

module.exports={userLoginService,verifyLoginService,
    createProfileService,updateProfileService,readProfileService
}