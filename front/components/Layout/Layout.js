import Footer from './Footer'
import Header from './Header'
import Main from './Main'
// import './Layout.module.scss'
import styles from './Layout.module.scss'

export default function Layout ({ children }) {
  return (
    // <div className='layout'>
    <div className={styles.layout}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}
