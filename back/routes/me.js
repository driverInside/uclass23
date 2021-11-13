const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.user) {
    const {
      _id,
      email,
      name,
      username
    } = req.user
    return res.send({
      _id,
      email,
      name,
      username
    })
  }

  return res.status(404).send({
    error: 'No hay'
  })
})

module.exports = router
