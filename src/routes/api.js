const express = require("express");
const ProductController = require("../controllers/productController.js");
const userController = require("../controllers/userController.js");
const router = express.Router();



//// product
router.get("/brandList", ProductController.brandList);
router.get("/reviewList/:productId", ProductController.productsReviewList);
router.get("/categoryList", ProductController.categoryList);
router.get("/sliderList", ProductController.sliderList);
router.get("/productsReviewList", ProductController.productsReviewList);
router.get(
  "/productsListByDetails/:productId",
  ProductController.productsListByDetails,
);
router.get(
  "/productsListByBrand/:brandId",
  ProductController.productsListByBrand,
);
router.get(
  "/productsListBySimilar/:similar",
  ProductController.productsListBySimilar,
);
router.get(
  "/productsListByCategory/:categoryId",
  ProductController.productsListByCategory,
);
router.get(
  "/productsListByKeyword/:keyword",
  ProductController.productsListByKeyword,
);
router.get(
  "/productsListByRemark/:remark",
  ProductController.productsListByRemark,
);

//users
router.get(
  "/userLoginController/:email",
  userController.userLoginController,
);
router.get(
  "/verifyLoginController/:email/:otp",
  userController.verifyLoginController,
);
router.get(
  "/userLogoutController", 
  userController.userLogoutController,
);


module.exports = router;
