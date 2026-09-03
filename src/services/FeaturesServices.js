const Features = require("../models/FeaturesModel.js");

const featuresListService=async(req)=>{
     try {
        const data = await Features.find();
        return { status: "success", data };
      } catch (error) {
        return { status: "fail", data: error }.toString();
      }
}

module.exports = {featuresListService};