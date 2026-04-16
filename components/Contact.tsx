'use client'
import { useState, FormEvent } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={`${styles.left} fade-up`}>
        <span className={styles.label}>contact</span>
        <h2 className={styles.title}>Let&apos;s Build<br />Something</h2>
        <p className={styles.sub}>
          Open to internships, collaborations, and projects. If you have an idea or opportunity — let&apos;s talk.
        </p>
        <div className={styles.links}>
          <a className={styles.link} href="https://github.com/Martina-Logos" target="_blank" rel="noopener noreferrer">↗ GitHub</a>
          <a className={styles.link} href="https://linkedin.com/in/martina-namutebi" target="_blank" rel="noopener noreferrer">↗ LinkedIn</a>
          <a className={styles.link} href="https://medium.com/@martina-namutebi" target="_blank" rel="noopener noreferrer">↗ Medium</a>
        </div>
      </div>

      <div className={`fade-up`} style={{ transitionDelay: '0.1s' }}>
        {/*
          TO ACTIVATE EMAIL:
          1. Go to https://web3forms.com — enter your email, get a free Access Key
          2. Replace YOUR_WEB3FORMS_ACCESS_KEY below with your key
          Emails will arrive directly in your inbox. No backend needed.
        */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="d8b888ee-45de-42aa-be46-764e212e0867" />
          <input type="hidden" name="subject" value="New message from your portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <div className={styles.group}>
            <label className={styles.formLabel} htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name" name="name" placeholder="MartinaLogos" required />
          </div>
          <div className={styles.group}>
            <label className={styles.formLabel} htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" name="email" placeholder="mlogos@example.com" required />
          </div>
          <div className={styles.group}>
            <label className={styles.formLabel} htmlFor="message">Message</label>
            <textarea className={styles.textarea} id="message" name="message" placeholder="Tell me about your project or opportunity..." required />
          </div>

          <button className={styles.submit} type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'sending...' : 'send message'}
          </button>

          {status === 'success' && (
            <p className={`${styles.statusMsg} ${styles.success}`}>
              message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className={`${styles.statusMsg} ${styles.error}`}>
              something went wrong. please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
