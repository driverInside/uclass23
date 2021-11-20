import React from 'react'
import Page from '../Page'
import Layout from '../../Layout'


export default function Cart ({ carts }) {
  console.log('----------------------')
  console.log(carts)
  console.log('----------------------')
  return (
    <Page>
      <Layout>
        <h1>yo soy la pagina de cart</h1>
        {
          carts.map((cart, index) => {
            return (
              <p key={index}>
                <strong>Yo soy un carrito de compras, ajua {cart._id} {cart.userId}</strong>
              </p>
            )
          })
        }
      </Layout>
    </Page>
  )
}
