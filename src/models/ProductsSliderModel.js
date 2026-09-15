const mongoose = require("mongoose");

const productsSliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },

    des: {
      type: String,
      required: [true, "Description is required"],
    },

    price: {
      type: String,
      required: [true, "Price is required"],
    },

    img: {
      type: String,
      required: [true, "Image is required"],
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Product ID is required"],
    },
  },
  {
    timestamps: true,
  }
);

const ProductsSlider = mongoose.model(
  "ProductsSlider",
  productsSliderSchema
);

module.exports = ProductsSlider;