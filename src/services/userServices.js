const { default: mongoose } = require("mongoose");
const Profile = require("../models/ProfileModel");
const User = require("../models/UserModel");
const { EncodeToken } = require("../utility/TokenHelper");

const userLoginService = async (req) => {
  try {
    const email = req.params["email"];
    const otp = Math.floor(Math.random() * 900000) + 100000;
    await User.updateOne(
      { email },
      { $set: { email, otp } },
      { $Upsert: true },
    );
    return { status: "success", message: `6 digit otp is sent ${otp}` };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const verifyLoginService = async (req) => {
  try {
    const email = req.params["email"];
    const otp = req.params["otp"];
    const result = await User.find({ email, otp }).countDocuments("total");
    console.log(result);
    if (result !== 1) {
      return { status: "faild", message: "invalid otp" };
    }
    const data = await User.aggregate([{ $match: { email, otp } }]);

    const token = await EncodeToken(data[0]._id, email);

    await User.updateOne({ email }, { $set: { otp: "0" } });
    return { status: "success", message: "Verified Successfully", token };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const saveProfileService = async (req) => {
  try {
    const userId = req.headers.user_id;
    const reqbody = req.body;
    reqbody.userId = new mongoose.Types.ObjectId(userId);

    await Profile.updateOne({ userId }, { $set: reqbody }, { upsert: true });

    return { status: "success", message: "profile saved" };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const readProfileService = async (req) => {
 try {
     const userId = new mongoose.Types.ObjectId(req.headers.user_id);
const match={ $match: { userId } }
const joinUser= {$lookup:{
    from:"users",localField:"userId",foreignField:"_id",as:'user'
}}
const unWind={$unwind:"$user"}
  const user = await Profile.aggregate([match,joinUser,unWind]);

  return {status:"success", data:user}
 } catch (error) {
        return { status: "fail", data: error }.toString();

 }
};

module.exports = {
  userLoginService,
  verifyLoginService,
  saveProfileService,
  readProfileService,
};
