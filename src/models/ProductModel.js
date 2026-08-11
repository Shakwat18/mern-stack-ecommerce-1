const mongoose = require("mongoose");
const ProductModel = new mongoose.Schema({
  title: {
    type: String,
    required: true["Product title is required"],
  },
  shortDes: {
    type: String,
    required: true["Short Description is required"],
  },
  price: {
    type: String,
    required: true["Product price is requierd"],
  },
  discount: {
    type: Boolean,
    required: true["Discount Value is required"],
  },
  disPrice: {
    type: String,
    required: true["DisPrice Value is required"],
  },
  img: {
    type: String,
    required: true["img Value is required"],
  },
  star: {
    type: String,
    required: true["star Value is required"],
  },
  stock: {
    type: Boolean,
    required: true["stock Value is required"],
  },
  remark: {
    type: String,
    required: true["Remark Value is required"],
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    required: true["category Id   is required"],
  },
  brandId: {
    type: mongoose.Types.ObjectId,
    required: true["brand Id   is required"],
  },
},{timeseries:true});

const Product = mongoose.model("products", ProductModel);

module.exports = Product;
