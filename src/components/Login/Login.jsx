import { useState } from 'react'
import blossom from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'
import styles from './Login.module.css'

export default function Login() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('This exam preview does not connect to an authentication service.')
  }

  function showForgotPassword(event) {
    event.preventDefault()
    setMessage('Password recovery is not connected in this exam preview.')
  }

  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Login">
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome back!</h1><p className={styles.subtitle}>Enter your Credentials to access your account</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="login-email">Email address</label>
                <input className={styles.input} id="login-email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
              </div>
              <div className={styles.field}>
                <div className={styles.labelRow}>
                  <label className={styles.label} htmlFor="login-password">Password</label>
                  <a className={styles.forgotLink} href="#forgot-password" onClick={showForgotPassword}>forgot password</a>
                </div>
                <input className={styles.input} id="login-password" name="password" type="password" placeholder="Enter your password" autoComplete="current-password" required />
              </div>
            </div>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkbox} name="remember" type="checkbox" />
              <span>Remember for 30 days</span>
            </label>
            <button className={styles.primaryButton} type="submit">Login</button>
          </form>
          <div className={styles.divider}>Or</div>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button" onClick={() => setMessage('Google sign-in is not connected in this exam preview.')}>
              <img src={googleLogo} width="24" height="24" alt="" />
              <span>Sign in with Google</span>
            </button>
            <button className={styles.socialButton} type="button" onClick={() => setMessage('Apple sign-in is not connected in this exam preview.')}>
              <img src={appleLogo} width="24" height="24" alt="" />
              <span>Sign in with Apple</span>
            </button>
          </div>
          <p className={styles.accountText}>Don’t have an account? <a className={styles.accountLink} href="#signup">Sign Up</a></p>
          {message && <p className={styles.notice} role="status">{message}</p>}
        </div>
      </section>
      <section className={styles.right} aria-label="Blossom illustration">
        <img className={styles.blossom} src={blossom} width="828" height="936" alt="Pink and yellow blossom flowers with green leaves" />
      </section>
    </main>
  )
}
