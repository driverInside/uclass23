const bcrypt = require('bcryptjs')
const UserModel = require('../models/user')

module.exports = class UserService {

  constructor () {
    this.UserModel = UserModel
  }


  async create (userData) {
    const pass = userData.password

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(pass, salt)

    userData.password = hash

    const newUser = new this.UserModel(userData)

    await newUser.save()

    return newUser.toSimple()
  }

  /**
   * getByEmail
   * @param {string} email user's email
   * @returns {Promise<user>}
   */
  getByEmail (email) {
    return this.UserModel.findOne({ email })
  }
}