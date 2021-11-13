const faker = require('faker')
require('dotenv').config()
require('../db/mongo')

const CategoryModel = require('../models/categories')
const ProductModel = require('../models/product')

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const createProducts = async size => {
  const categories = await CategoryModel.find({})
    .then(categories => {
      return categories.map(category => ({
        _id: category._id,
        name: category.name
      }))
    })

  const products = []

  for (let i = 0; i < size; i++) {
    const category = categories[getRandomInt(0, categories.length)]

    console.log('----------------------')
    console.log(category)
    console.log('----------------------')
    const newProduct = new ProductModel({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price()),
      available: true,
      inStock: getRandomInt(1, 100),
      category: category._id
    })

    await newProduct.save()
  }
}

Promise
  .resolve(createProducts(30))
  .then(() => {
    console.log('products created')
  })
  .catch(err => console.error(err))
