import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
        <h1>Log In</h1>
        <>
        <div className="login-form-page">
        <p>{message}</p>
          
        <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
        />
        </div>
        </>
     
    </main>
  )
}

export default LoginPage
