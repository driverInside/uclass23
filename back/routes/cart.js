const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.user) {
    const {
      _id,
    } = req.user
    return res.send({
      _id,
      email,
      name,
      username
    })
  }

  return res.send([])
})

module.exports = router
