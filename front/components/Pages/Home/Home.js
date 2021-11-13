import { useEffect, useState } from 'react'
import Page from '../Page'
import Layout from '../../Layout'

export default function Home () {
  const [token, setToken] = useState('')

  useEffect(() => {
    const sToken = window.sessionStorage.getItem('token')
    console.log('----------------------')
    console.log(`mi token de sesión es: ${sToken}`)
    console.log('----------------------')
    setToken(sToken)
  }, [])

  return (
    <Page>
      <Layout>
        <h1>yo soy la pagina de home {token}</h1>
      </Layout>
    </Page>
  )
}
