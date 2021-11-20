import { useState, useEffect } from 'react'
import axios from 'axios'
import Page from '../Page'
import Layout from '../../Layout'
import CartComponent from '../../Cart'


export default function Cart () {
  const [cart, setCart] = useState()
  const [token, setToken] = useState('')

  useEffect(() => {
    const sToken = window.sessionStorage.getItem('token')
    setToken(sToken)

    
  }, [])

  return (
    <Page>
      <Layout>
        <CartComponent />
      </Layout>
    </Page>
  )
}
