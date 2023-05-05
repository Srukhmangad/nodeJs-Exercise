const ProductModel = require('../models/productModel');

const addProduct = async (req, res) => {
    const { id, name, total_qnty, category, price } = req.body
    console.log(username, email, password);
    let productObj = {
        id: id,
        name: name,
        totalQuantity: total_qnty,
        category: category,
        price: price
    }
    try {
        let data = await ProductModel(productObj).save();
    if (data) {
        return res.json({
            message:"data inserted succesfuylly"
        })
    }
    return res.json({
        message:"data not inserted"
    })
    } catch (error) {
        return res.json({
            message:"Error"
        })
    }
}

const getProductList = async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (error) {
        return res.json({
            message:"Error"
        })
    }
  };

const getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id);
      if (!product) {
        return res.json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
        return res.json({
            message:"Error"
        })
    }
  };


  const getProductByCategory = async (req, res) => {
    try {
      const { category } = req.params;
      const product = await ProductModel.findById(category);
      if (!product) {
        return res.json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
        return res.json({
            message:"Error"
        })
    }
  };

  module.exports = {addProduct, getProductList, getProductById, getProductByCategory};
