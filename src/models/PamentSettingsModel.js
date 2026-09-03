const mongoose = require("mongoose");

const paymentSettingsSchema = new mongoose.Schema(
  {
    store_id: {
      type: String,
      required: [true, "Store ID is required"],
    },

    store_passwd: {
      type: String,
      required: [true, "Store password is required"],
    },

    currency: {
      type: String,
      required: [true, "Currency is required"],
    },

    success_url: {
      type: String,
      required: [true, "Success URL is required"],
    },

    fail_url: {
      type: String,
      required: [true, "Fail URL is required"],
    },

    cancel_url: {
      type: String,
      required: [true, "Cancel URL is required"],
    },

    ipn_url: {
      type: String,
      required: [true, "IPN URL is required"],
    },

    init_url: {
      type: String,
      required: [true, "Initial URL is required"],
    },
  },
  {
    timestamps: true,
  }
);

const PaymentSettings = mongoose.model(
  "PaymentSettings",
  paymentSettingsSchema
);

module.exports = PaymentSettings;