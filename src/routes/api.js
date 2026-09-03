const express = require("express");
const ProductController = require("../controllers/productController.js");
const userController = require("../controllers/userController.js");
const wishListController = require("../controllers/wishListController.js");
const cartController = require("../controllers/cartListController.js");
const InvoiceController = require("../controllers/InvoiceController.js");
const FeaturesController = require("../controllers/FeaturesController.js");
const router = express.Router();
const auth= require('../middlewares/authentication.js')


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
  "/userLogoutController", auth,
  userController.userLogoutController,
);

router.post(
  "/createProfileController", auth,
  userController.createProfileController,
);
router.post(
  "/updateProfileController", auth,
  userController.updateProfileController,
);
router.get(
  "/readProfileController", auth,
  userController.readProfileController,
);

//wish List 
router.post(
  "/createWishList", auth,
  wishListController.createWishList
);
router.post(
  "/deleteWishList", auth,
  wishListController.deleteWishList
);
router.get(
  "/findWishList", auth,
  wishListController.findWishList
);

/// cart list
router.get(
  "/deleteCart", auth,
  cartController.deleteCart
);
router.post(
  "/createCartList", auth,
  cartController.createCartList
);
router.get(
  "/cartList", auth,
  cartController.cartList
);

router.post('/updateCart',auth,cartController.updateCart)


//invoice 

router.get('/invoiceList',auth,InvoiceController.invoiceList)
router.get('/createInvoice',auth,InvoiceController.createInvoice)
router.get('/invoiceProductLists/:invoiceId',auth,InvoiceController.invoiceProductLists)
router.post('/paymentSuccess/:trx_id',auth,InvoiceController.paymentSuccess)
router.post('/paymentFail/:trx_id',auth,InvoiceController.paymentFail)
router.post('/paymentCancel/:trx_id',auth,InvoiceController.paymentCancel)
router.post('/paymentIPN/:trx_id',auth,InvoiceController.paymentIPN)


// features
router.get('/featuresList',FeaturesController.featuresList)


// reviews
router.get('/productsReviewList/:productId',auth,ProductController.productsReviewList)
router.post('/createReview/:productId',auth,ProductController.createReview)





module.exports = router;
