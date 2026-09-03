const mongoose = require("mongoose");
const WishList = require("../models/WishModel");

const createWishlistService = async (req) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.headers.user_id);
    const productId = new mongoose.Types.ObjectId(req.body.productId);

    await WishList.create({
      userId,
      productId,
    });

    return {
      status: "success",
      message: "Added to Wishlist",
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    }.toString();
  }
};

const findWishListService = async (req) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.headers.user_id);
    const match = { $match: { userId } };

    const joinProduct = {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "product",
      },
    };
    const unWindProduct = { $unwind: "$product" };


    const joinbrand = {
      $lookup: {
        from: "brands",
        localField: "product.brandId",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unWindbrand = { $unwind: "$brand" };



    const joinCategory = {
      $lookup: {
        from: "categories",
        localField: "product.categoryId",
        foreignField: "_id",
        as: "category",
      },
    };
    const unWindcategory = { $unwind: "$category" };

    // const project= {$project:{}}

    const data = await WishList.aggregate([match, joinProduct, unWindProduct, joinbrand, unWindbrand,joinCategory, unWindcategory]);

    return {
      status: "success",
      data,
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    }.toString();
  }
};

const deleteWishListService = async (req) => {
  try {
    const productId = new mongoose.Types.ObjectId(req.body.productId);
    await WishList.deleteOne({ productId });
    return {
      status: "success",
      message: "Deleted to Wishlist",
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    }.toString();
  }
};
module.exports = {
  createWishlistService,
  findWishListService,
  deleteWishListService,
};
