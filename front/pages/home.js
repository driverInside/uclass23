import axios from 'axios'
import { useState, useEffect } from 'react'
import Home from '../components/Pages/Home'

export default function home () {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [token, setToken] = useState('')

  useEffect(() => {
    const sToken = window.sessionStorage.getItem('token')
    setToken(sToken)
    axios(
      {
        url: 'http://localhost:8000/products',
        method: 'get',
        headers: {
          Authorization: sToken,
          'Content-type': 'application/json'
        }
      }
    ).then(r => {
      console.log(r.data)
      setProducts(r.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  const handleAddProduct = (evt, product) => {
    evt.stopPropagation()
    setCart(cart.concat(product))
  }
  
  const saveCart = evt => {
    
    evt.stopPropagation()

    axios(
      {
        url: 'http://localhost:8000/carts',
        method: 'post',
        headers: {
          Authorization: token,
          'Content-type': 'application/json'
        },
        data: {
          products:cart
        }
      }
    ).then(r => {
      console.log(r.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <Home>
      <div>
        <h1>Esta es mi página fdsafsadfsdaf { products.length }</h1>
        { products.length }
        {
          products.map((product, index) => {
            return (
              <div key={index}>
                <h3>{product.name}</h3>

                <p> {product.id} </p>
                <button onClick={e => handleAddProduct(e, product)}> Agregar al carrito </button>
              </div>
            )
          })
        }
        <button onClick={e => saveCart(e)}> Save Cart </button>
      </div>
    </Home>
  )
}
