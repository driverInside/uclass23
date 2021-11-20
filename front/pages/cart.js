import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cart from '../components/Pages/Cart'

const BACKEND_URL = 'http://localhost:8000'
// 1. Obtener el token de session storage
// 2. Si no hay token, redirigirme al login
// 3. Mandar la petición a GET back/cart
// 4. Almacenar en un estado para enviarlo a mi componente de página
export default function CartPage () {
  const [carts, setCarts] = useState([])
  const router = useRouter()
  
  useEffect(() => {
    const sToken = window.sessionStorage.getItem('token')
    axios({
      url: `${BACKEND_URL}/carts`,
      method: 'get',
      headers: {
        Authorization: sToken,
        'Content-type': 'application/json'
      }
    })
      .then(r => {
        console.log(r.data)
        setCarts(r.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return <Cart carts={carts} />
}
