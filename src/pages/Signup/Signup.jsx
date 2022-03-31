import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

import './Signup.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className='whole-signup-page'>
      <main className={styles.container}>
        <h1>Sign Up</h1>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </main>
    </div>
  )
}

export default Signup
