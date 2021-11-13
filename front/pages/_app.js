import { AppProvider } from '../components/context/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <AppProvider><Component {...pageProps} /></AppProvider>
}

export default MyApp
