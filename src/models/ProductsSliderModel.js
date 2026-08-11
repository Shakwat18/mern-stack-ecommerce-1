const mongoose = require("mongoose");

const productsSliderModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true["title is  Required"],
    },
    des: {
      type: String,
      required: true["description is  Required"],
    },
    price: {
      type: String,
      required: true["price is  Required"],
    },
    img: {
      type: String,
      required: true["img is  Required"],
    },
    productId: {
      type: mongoose.Types.ObjectId,
      required: true["product Id is  Required"],
    },
  },
  { timeseries: true },
);

const ProductsSlider = mongoose.model("productSliders", productsSliderModel);

module.exports = ProductsSlider;
