const express = require('express')
const router = express.Router();
const { getCategories, createCategory } = require('../services/category');

router.get('/', async (req, res) => {
  const categories = await getCategories()
  res.send(categories)
})

router.post('/', async (req, res) => {
  const { name } = req.body;
  const newCategory = await createCategory(name)
  res.status(201)
  res.json(newCategory)
})





module.exports = router;