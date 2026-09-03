const { userLoginService, verifyLoginService, saveProfileService, readProfileService } = require("../services/userServices");

const userLoginController = async(req, res) => {
const result= await userLoginService(req)

res.status(200).json(result)
};

const verifyLoginController =async (req, res) => {
const result = await verifyLoginService(req)
if(result["status"]== 'success'){
  const cookieOption={
    expires: new Date(Date.now()+24*60*60*1000),httpOnly:false
  }
  res.cookie('token',result['token'],cookieOption)
 return res.status(200).json(result)
}
res.status(200).json(result)

};

const userLogoutController = (req, res) => {
  const cookieOption={
    expires: new Date(Date.now()-24*60*60*1000),httpOnly:false
  }
  res.cookie('token','',cookieOption)
return  res.status(200).json({status:'success'})

};

const createProfileController = async(req, res) => {
  const result =await saveProfileService(req)
  res.status(200).json(result)

};

const updateProfileController =async (req, res) => {
    const result =await saveProfileService(req)
  res.status(200).json(result)
};

const readProfileController =async (req, res) => {
  const result= await readProfileService(req)
  res.status(200).json(result)

};

module.exports = {
  userLoginController,
  verifyLoginController,
  createProfileController,
  userLogoutController,
  updateProfileController,
  readProfileController,
};
