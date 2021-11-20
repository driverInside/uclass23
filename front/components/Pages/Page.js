import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const BACKEND_URL = 'http://localhost:8000'

export default function Page ({ children }) {
  const router = useRouter()
  const [token, setToken] = useState('')
  const [auth, setAuth] = useState(false)
  const [pathName, setPathName] = useState('/')

  useEffect(() => {
    const sToken = window.sessionStorage.getItem('token')
    setToken(sToken)
    setPathName(router.pathname)

    axios({
      url: `${BACKEND_URL}/me`,
      method: 'get',
      headers: {
        Authorization: sToken,
        'Content-type': 'application/json'
      }
    })
      .then(r => {
        console.log('----------------------')
        console.log(r.data)
        console.log('----------------------')
        setAuth(true)
      })
      .catch(err => {
        console.error(err)
      })

    console.log('----------------------')
    console.log(sToken, pathName)
    console.log('----------------------')
    if (!sToken && pathName !== '/' && !auth) {
      router.push('/')
    }
  }, [pathName, auth])

  return (
    <div>
      {children}
    </div>
  )
}
