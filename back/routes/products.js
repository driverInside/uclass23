const express = require('express')
const router = express.Router();
const { getProducts, getProductsByCategory } = require('../services/product');

router.get('/', async (req, res) => {
  const { size = 10 } = req.query
  const products = await getProducts(parseInt(size))
  res.send(products)
})

router.get('/category/:categoryId', async (req, res) => {
  const { size } = req.query
  const { categoryId } = req.params
  const products = await getProducts(parseInt(size))
  res.send(products)
})


module.exports = router;