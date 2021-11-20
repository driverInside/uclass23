const CartModel = require('../models/cart')

const createCart = async (userId, products) => {
  const newCart = new CartModel({
    userId,
    products
  })

  await newCart.save()

  return newCart
}

const getCarts = userId => CartModel.find({ userId })

module.exports = {
  createCart,
  getCarts
}
