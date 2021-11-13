const faker = require('faker');
const ProductModel = require('../models/product')

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


const getProducts = async (size = 10) => {
  return ProductModel.find({}).limit(parseInt(size))
}

const getProductsByCategory = async category => {
  return ProductModel.find({ category })
}



module.exports = {
  getProducts,
  getProductsByCategory
}