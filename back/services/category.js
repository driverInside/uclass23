const CategoryModel = require('../models/categories');


const getCategories = () => {
  return CategoryModel.find({})
}

const createCategory = async (name) => {
  const newCategory = new CategoryModel({ name })
  await newCategory.save()

  return newCategory.toJSON()
}


module.exports = {
  getCategories,
  createCategory
}

