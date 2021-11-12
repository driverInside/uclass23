import Page from '../Page'
import LoginComponent from '../../Login'
import styles from './Login.module.scss'

export default function Login () {
  return (
    <Page>
      <div className={styles.loginPage}>
        <LoginComponent />
      </div>
    </Page>
  )
}
