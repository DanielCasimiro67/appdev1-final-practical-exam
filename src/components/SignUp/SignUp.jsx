import { useState } from 'react'
import blossom from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'
import styles from './SignUp.module.css'

export default function SignUp() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('This exam preview does not connect to an authentication service.')
  }

  function showTerms(event) {
    event.preventDefault()
    setMessage('The terms & policy page is not included in this exam preview.')
  }

  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign Up">
        <div className={styles.content}>
          <h1 className={styles.title}>Get Started Now</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-name">Name</label>
                <input className={styles.input} id="signup-name" name="name" type="text" placeholder="Enter your name" autoComplete="name" required />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-email">Email address</label>
                <input className={styles.input} id="signup-email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-password">Password</label>
                <input className={styles.input} id="signup-password" name="password" type="password" placeholder="Enter your password" autoComplete="new-password" required />
              </div>
            </div>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkbox} name="terms" type="checkbox" required />
              <span>I agree to the <a className={styles.termsLink} href="#terms" onClick={showTerms}>terms &amp; policy</a></span>
            </label>
            <button className={styles.primaryButton} type="submit">Signup</button>
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
          <p className={styles.accountText}>Have an account? <a className={styles.accountLink} href="#login">Sign In</a></p>
          {message && <p className={styles.notice} role="status">{message}</p>}
        </div>
      </section>
      <section className={styles.right} aria-label="Blossom illustration">
        <img className={styles.blossom} src={blossom} width="828" height="936" alt="Pink and yellow blossom flowers with green leaves" />
      </section>
    </main>
  )
}
