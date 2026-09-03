const { default: mongoose } = require("mongoose");
const Cart = require("../models/CartModel");

const createCartService = async (req) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.headers.user_id);
    const reqbody = req.body;
    reqbody.userId = userId;
    await Cart.create(reqbody);
    return { status: "success", message: "added to cart" };
  } catch (error) {
    return { status: "failed", message: error.message }.toString;
  }
};
const updateCartService = async (req) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.headers.user_id);
    const cartId = new mongoose.Types.ObjectId(req.params.cartId);
    const reqbody = req.body;
    reqbody.userId = userId;
    await Cart.updateOne({ _id: cardId, userId }, { $set: { reqbody } });
    return { status: "success", message: "cart updated" };
  } catch (error) {
    return { status: "failed", message: error.message }.toString;
  }
};
const deleteCartService = async (req) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.headers.user_id);
    const cartId = new mongoose.Types.ObjectId(req.params.cartId);

    await Cart.deleteOne({ _id: cardId, userId });
    return { status: "success", message: "cart deleted" };
  } catch (error) {
    return { status: "failed", message: error.message }.toString;
  }
};

const cartListService = async (req) => {
   try {
      const data= await Cart.find()
          return { status: "success",data};

   } catch (error) {
          return { status: "failed", message: error.message }.toString;

   }
};

module.exports = {
  createCartService,
  updateCartService,
  deleteCartService,
  cartListService,
};
