const { DecodeToken } = require("../utility/TokenHelper")

const auth=(req,res,next)=>{
    const token= req.cookies['token']
    DecodeToken(token,req,res,next)
}

module.exports= auth