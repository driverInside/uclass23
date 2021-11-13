const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Number,
    default: 1
  },
  category: {
    type: Schema.Types.ObjectId
  }
}, {
  versionKey: false,
  timestamps: true
})

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel
