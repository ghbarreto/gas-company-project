const Product = require("../models/Gas");

module.exports = app => {
  app.get("/api/products", async (req, res) => {
    const product = await Product.find();

    res.send({ product });
  });

  app.get("/api/order", async (req, res) => {
    console.log("searching");
  });
};
