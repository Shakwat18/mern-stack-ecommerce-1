const {featuresListService} = require("../services/FeaturesServices.js");

const featuresList = async (req, res) => {
  const result = await featuresListService(req);
  return res.status(200).json(result);
};


module.exports= {featuresList}