import blossom from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

export default function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign Up">
        <div className={styles.content} />
      </section>
      <section className={styles.right} aria-label="Blossom illustration">
        <img className={styles.blossom} src={blossom} width="828" height="936" alt="Pink and yellow blossom flowers with green leaves" />
      </section>
    </main>
  )
}
