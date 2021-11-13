import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { FiLogIn } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { AiOutlineLock } from 'react-icons/ai'
import styles from './Login.module.scss'

const BACKEND_URL = 'http://localhost:8000'

export default function Login () {
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const router = useRouter()

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    evt.stopPropagation()

    setIsLoading(true)

    axios.post(`${BACKEND_URL}/auth/login`, {
      email: formData.email,
      password: formData.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('----------------------')
      console.log(`user: ${response.data?.user}`)
      console.log(`token: ${response.data?.token}`)
      console.log('----------------------')

      window.sessionStorage.setItem('token', response.data?.token)
      // TODO: salvar el token de la respuesta
      // TODO: redireccionar
      router.push('/home')
    })
    .catch(err => {
      // no hacer en producción
      // 5 rangos de códigos http
      // 1xx info
      // 2xx successful
      // 3xx delegar la acción al cliente
      // 4xx client error
      // 5xx server error
      console.error(err)
      setIsError(true)
    })
    .finally(() => {
      setIsLoading(false)
    })

  }

  return (
    <div className={`section box ${styles.login}`}>
      <div className='content'>
        <form onSubmit={e => handleSubmit(e)}>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                onChange={e => handleOnChange(e)}
                name='email'
                className='input'
                type='email' placeholder='Email'
              />
              <span className='icon is-small is-left'>
                <BiUser />
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left'>
              <input onChange={e => handleOnChange(e)} name='password' className='input' type='password' placeholder='Password' />
              <span className='icon is-small is-left'>
                <AiOutlineLock />
              </span>
            </p>
          </div>
          {isError && (
            <div className='notification is-danger is-light'>
              <button className='delete'></button>
              Usuario o contraseña incorrectos.
            </div>
          )}
          <div className='field'>
            <p className='control'>
              <button className={`button is-medium is-fullwidth is-primary ${isLoading && 'is-loading'}`}>
                <span>Ingresar</span>
                <span className='icon'>
                  <FiLogIn />
                </span>
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
