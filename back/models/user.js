const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  permissions: [
    {
      type: String
    }
  ]
}, {
  versionKey: false,
  timestamps: true
})

UserSchema.methods.toSimple = function () {
  //
  const { password, ...restUser } = this.toObject()

  return restUser
}


const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
