const mongoose = require("mongoose");
const BrandModel = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true["Brand Name Required"],
    },
    brandImg: {
      type: String,
    },
  },
  { timeseries: true },
);

const Brand = mongoose.model("brands", BrandModel);

module.exports = Brand;
