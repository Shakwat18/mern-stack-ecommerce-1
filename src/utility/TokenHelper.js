const jwt= require("jsonwebtoken")
require('dotenv').config()

const EncodeToken=(user_id,email)=>{
    const key= process.env.TOKENKEY
    const payload={
        user_id:user_id,
        email:email
    }

    return jwt.sign(payload,key,{expiresIn: '24h'})
}


const DecodeToken=(token,req,res,next)=>{
 const key= process.env.TOKENKEY    
    jwt.verify(token,key,function (err, decoded){
        if(err){
    return res.status(200).json( {status:'failed',message: 'unAuthorized'})
}
const email= decoded['email']
const user_id= decoded['user_id']
req.email= email
req.user_id= user_id

next()
    } )


}

module.exports= {EncodeToken,DecodeToken}