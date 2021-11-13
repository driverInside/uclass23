import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/app'
import axios from 'axios'

const BACKEND_URL = 'http://localhost:8000'

const AsideCategory = () => {
  const appContext = useAppContext()
  const [categoriesState, setCategoriesState] = useState([])

  const getCategories = () => {
    return axios.get(`${BACKEND_URL}/categories`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => {
      return data.data
    })
  }

  useEffect(() => {
    getCategories()
      .then(categories => {
        console.log(categories)
        setCategoriesState(categories)
      })
  }, [])

  console.log(JSON.stringify(appContext))

  return (
    <article className='panel is-primary'>
      <h2>se tiene que mostrar</h2>
      <a className='panel-block is-active'>
        {JSON.stringify(appContext)}
      </a>
      {
        categoriesState.map((category, index) =>
          <a className='panel-block is-active' key={index}>
            {category.name}
          </a>
        )
      }
    </article>
  )
}

export default AsideCategory
