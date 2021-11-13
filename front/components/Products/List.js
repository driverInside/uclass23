import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './List.module.scss'

const BACKEND_URL = 'http://localhost:8000'

const List = () => {

  const [list, setList] = useState([])

  const getProducts = () => {
    return axios.get(`${BACKEND_URL}/products?size=10`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => {
      return data.data
    })
  }

  useEffect(() => {
    getProducts()
      .then(products => {
        console.log(products)
        setList(products)
      })
  }, [])

  return (
    <section className="section is-medium">
      <div className="container">
        <div className={styles.container_card}>
          {
            list.map(product =>
              <div className="card is-one-third">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{product.name}</p>
                    </div>
                  </div>

                  <div className="content">
                    {product.description}
                    <hr />
                    {product.inStock}
                    <br />
                    $<span><strong>{product.price}</strong></span>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default List
