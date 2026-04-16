'use client'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = ['about', 'projects', 'skills', 'experience', 'blog', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>Logos Intelligence</a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}><a href={`#${l}`} className={styles.link}>{l}</a></li>
        ))}
      </ul>
    </nav>
  )
}
