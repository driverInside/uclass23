const express = require('express')
const router = express.Router();
const { getProducts } = require('../services/product');

router.get('/', async (req, res) => {
  const { size } = req.query
  const products = await getProducts(parseInt(size))
  res.send(products)
})


module.exports = router;