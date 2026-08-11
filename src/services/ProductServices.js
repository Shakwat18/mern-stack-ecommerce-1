const mongoose = require("mongoose");
const Brand = require("../models/BrandModel");
const Product = require("../models/ProductModel.js");
const ProductsSlider = require("../models/ProductsSliderModel.js");
const Category = require("../models/CategoryModel.js");
const Review = require("../models/ReviewModel.js");

// const object=new mongoose.Types.ObjectId

const brandListService = async (req) => {
  try {
    const data = await Brand.find();
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const sliderService = async (req) => {
  try {
    const data = await ProductsSlider.find();
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const categoryListService = async (req) => {
  try {
    const data = await Category.find();
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};
const productReviewService = async (req) => {
  try {
    const {productId}= req.params
    const match= {$match:{productId:new mongoose.Types.ObjectId(productId)}}
    const joinUser={$lookup:{
      from:'users',
      localField:'userId',
      foreignField:'_id',
      as:'user'
    }}
    unWind={$unwind:"$user"}
    const project= {$project:{"_id":0,"user._id":0}}
    const data = await Review.aggregate([
match,
joinUser,
unWind,
project
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const brandService = async (req) => {
  try {
    const { brandId } = req.params;
    const match = { $match: { brandId: new mongoose.Types.ObjectId(brandId) } };
    const joinBrand = {
      $lookup: {
        from: "brands",
        localField: "brandId",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unWind = { $unwind: "$brand" };
    const joinCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    };
    const unWindCategory = { $unwind: "$category" };
    const project = { $project: { _id: 0, "category._id": 0, "brand._id": 0 } };
    const data = await Product.aggregate([
      match,
      joinBrand,
      joinCategory,
      unWindCategory,
      unWind,
      project,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const categoryService = async (req) => {
  try {
    const { categoryId } = req.params;
    const match = {
      $match: { categoryId: new mongoose.Types.ObjectId(categoryId) },
    };
    const joinBrand = {
      $lookup: {
        from: "brands",
        localField: "brandId",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unWind = { $unwind: "$brand" };
    const joinCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    };
    const unWindCategory = { $unwind: "$category" };
    const project = { $project: { _id: 0, "category._id": 0, "brand._id": 0 } };
    const data = await Product.aggregate([
      match,
      joinBrand,
      joinCategory,
      unWind,
      unWindCategory,
      project,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

const similarService = async (req) => {
  try {
    const { similar } = req.params;
//  const { categoryId } = req.params;
    const match = {
      $match: { categoryId: new mongoose.Types.ObjectId(similar) },
    };
    const limit= {$limit:2}
    const joinBrand = {
      $lookup: {
        from: "brands",
        localField: "brandId",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unWind = { $unwind: "$brand" };
    const joinCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    };
    const unWindCategory = { $unwind: "$category" };
    const project = { $project: { _id: 0, "category._id": 0, "brand._id": 0 } };
    const data = await Product.aggregate([
      match,
      limit,
      joinBrand,
      joinCategory,
      unWind,
      unWindCategory,
      project,
    ]);
    return { status: "success", data };
    // return { status: "success", data: similar };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};
const keywordService = async (req) => {
  try {
    const { keyword } = req.params;
    const searchRegex = { $regex: keyword, $options: "i" };
    const searchParams = [{ title: searchRegex }, { shortDes: searchRegex }];
    const search = { $or: searchParams };
    const match={$match:search}
    const joinBrand = {
      $lookup: {
        from: "brands",
        localField: "brandId",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unWind = { $unwind: "$brand" };
    const joinCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    };
    const unWindCategory = { $unwind: "$category" };
    const project = { $project: { _id: 0, "category._id": 0, "brand._id": 0 } };
    const data = await Product.aggregate([
      match,
      joinBrand,
      joinCategory,
      unWind,
      unWindCategory,
      project,
    ]);
    return { status: "success", data, };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};
const remarkService = async (req) => {
  try {
    const { remark } = req.params;
const match = {
      $match: { remark },
    };
    const limit= {$limit:2}
    const joinBrand = {
      $lookup: {
        from: "brands",
        localField: "brandId",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unWind = { $unwind: "$brand" };
    const joinCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    };
    const unWindCategory = { $unwind: "$category" };
    const project = { $project: { _id: 0, "category._id": 0, "brand._id": 0 } };
    const data = await Product.aggregate([
      match,
      limit,
      joinBrand,
      joinCategory,
      unWind,
      unWindCategory,
      project,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};
const productDetailsService = async (req) => {
  try {
    const { productId } = req.params;
     const match = { $match: { _id: new mongoose.Types.ObjectId(productId) } };
    const joinBrand = {
      $lookup: {
        from: "brands",
        localField: "brandId",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unWind = { $unwind: "$brand" };
    const joinCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    };
    const joinProductDetails = {
      $lookup: {
        from: "productsDetails",
        localField: "_id",
        foreignField: "productId",
        as: "details",
      },
    };
    const unWindCategory = { $unwind: "$category" };
    const unWindDetails = { $unwind: "$details" };
    const project = { $project: { _id: 0, "category._id": 0, "brand._id": 0,"details._id":0 } };
    const data = await Product.aggregate([
      match,
   
    joinBrand,
    unWind,

    joinCategory,
    unWindCategory,

    joinProductDetails,
    unWindDetails,
      project,
    ]);
    return { productId,status: "success", data, };
  
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

module.exports = {
  brandListService,
  categoryListService,
  brandService,
  categoryService,
  sliderService,
  similarService,
  keywordService,
  remarkService,
  productDetailsService,
  productReviewService,
};
