import { useEffect, useState } from 'react'
import Page from '../Page'
import Layout from '../../Layout'

export default function Home () {
  const [token, setToken] = useState('')

  useEffect(() => {
    const sToken = window.sessionStorage.getItem('token')
    setToken(sToken)
  }, [])

  return (
    <Page>
      <Layout>
        <h1>yo soy la pagina de home</h1>
      </Layout>
    </Page>
  )
}
