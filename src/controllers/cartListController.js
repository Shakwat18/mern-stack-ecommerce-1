const {
  cartListService,
  createCartService,
  deleteCartService,
  updateCardService,
} = require("../services/cartListServices");

const cartList = async (req, res) => {
  const result = await cartListService(req);
  res.status(200).json(result);
};
const createCartList = async (req, res) => {
  const result = await createCartService(req);
  res.status(200).json(result);
};

const deleteCart = async (req, res) => {
  const result = await deleteCartService(req);
  res.status(200).json(result);
};

const updateCart = async (req, res) => {
  const result = await updateCardService(req);
  res.status(200).json(result);
};


module.exports={cartList,createCartList, deleteCart, updateCart}