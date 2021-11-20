const express = require('express')
const router = express.Router()
const { createCart, getCarts } = require('../services/cart')

router.get('/', async (req, res) => {
  if (req.user) {
    const {
      _id,
    } = req.user

    const carts = await getCarts(_id)
    return res.send(carts)
  }

  return res.send([])
})

router.post('/', async (req, res) => {
  if (!req.user) {
    return res.status(403).send({
      error: 'No auth token sent'
    })
  }

  const { _id } = req.user
  const { products } = req.body

  const cart = await createCart(_id, products)

  res.status(201).send(cart)
})

module.exports = router
