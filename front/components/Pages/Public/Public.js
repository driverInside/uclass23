// Usar esto cuando quiera una página pública
import Layout from '../../Layout'
export default function Public ({ children }) {
  return (
    <Layout>
      { children }
    </Layout>
  )
}
