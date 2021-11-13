const faker = require('faker');
const CategoryModel = require('../models/categories');

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


const getProducts = async (size = 10) => {
  const categories = await CategoryModel.find({})
    .then(categories => {
      return categories.map(category => category.name)
    })
  const products = []

  for (let i = 0; i < size; i++) {
    const category = categories[getRandomInt(0, categories.length)]
    const product = {
      name: faker.commerce.product()
    }
    console.log('--->', faker.commerce.product())
    console.log(product)
    products.push(product)
  }
  return products
}



module.exports = {
  getProducts
}