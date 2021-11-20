const mongoose = require('mongoose')
const { Schema } = mongoose

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true 
  },
  products: [
    {
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
      category: {
        type: Schema.Types.ObjectId
      } 
    }
  ],
  completed: {
    type: Boolean,
    default: false
  }
}, {
  versionKey: false,
  timestamps: true
})

const CartModel = mongoose.model('Cart', CartSchema)

module.exports = CartModel
