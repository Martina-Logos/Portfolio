import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
      <span className={styles.made}>built with intention</span>
    </footer>
  )
}
