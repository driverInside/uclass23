const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  if (!req.user) {
    return res.status(403).send({
      error: 'No auth token sent'
    })
  }


const paymentData = {
  transaction_amount: Number(req.body.transactionAmount),
  token: req.body.token,
  description: req.body.description,
  installments: Number(req.body.installments),
  payment_method_id: req.body.paymentMethodId,
  issuer_id: req.body.issuer,
  payer: {
    email: req.body.email,
    identification: {
      number: req.body.docNumber
    }
  }
}

  const { _id } = req.user
  const { products } = req.body

  const cart = await createCart(_id, products)

  res.status(201).send({
    payment: 'payment'
  })
})

module.exports = router