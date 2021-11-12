const express = require('express');
const router = express.Router();

const UserService = require('../services/user')
const userService = new UserService()

// SOLID
router.post('/', async function(req, res, next) {
  const userData = req.body
  const newUser = await userService.create(userData)

  res.status(201)
  return res.send(newUser)
});

module.exports = router;
