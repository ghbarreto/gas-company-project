const mongoose = require("mongoose");

const gasSchema = new mongoose.Schema({
  name: String,
  glp: Boolean,
  price: Number,
});

const Product = mongoose.model("product", gasSchema);

module.exports = Product;
