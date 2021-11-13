const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const UserService = require('../services/user')

const userService = new UserService()

/* GET users listing. */
router.post('/login', async function(req, res, next) {
  const { email, password } = req.body

  // 1. obtener al usuario con ese correo
  const user = await userService.getByEmail(email)
  if (!user) {
    return res.status(401).send({
      message: 'Usuario o contraseña inválida'
    })
  }

  const isOk = bcrypt.compareSync(password, user.password)
  if(!isOk) {
    return res.status(401).send({
      message: 'Usuario o contraseña inválidos'
    })
  }

  const tokenSecret = process.env.TOKEN_SECRET

  const token = jwt.sign(user.toSimple(), tokenSecret)

  // CORS
  // https
  // jwt cypher algorithm
  // TOKEN_SECRET from certificate
  res.send({
    user: user.username,
    token
  })
})

module.exports = router
