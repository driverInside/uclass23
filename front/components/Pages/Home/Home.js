import { useEffect, useState } from 'react'
import Page from '../Page'
import Layout from '../../Layout'
import List from '../../Products/List'

export default function Home() {
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
        <List />
      </Layout>
    </Page>
  )
}
