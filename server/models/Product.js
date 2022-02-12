const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String },
  productImage: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isBuyer: { type: Boolean, required: true },
});

module.exports = mongoose.model("Product", productSchema);
