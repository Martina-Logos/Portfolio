import styles from './About.module.css'

const stats = [
  { num: '5+', label: 'projects shipped' },
  { num: '1+', label: 'years in the field' },
  { num: '3',  label: 'work mode' },
  { num: '4',  label: 'cup of tea / day' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.left} fade-up`}>
        <span className="section-label">about</span>
        <h2 className="section-title">Building Things<br />That Matter</h2>
        <p className={styles.text}>
          I&apos;m Martina, a junior software and AI engineer passionate about turning ideas into real, working products. I love the space where software engineering meets AI and where code creates intelligent experiences.
      I open to Remote, Hybrid, Relocation opportunities.
        </p>
        <p className={styles.text}>
          Currently focused on personal and academic projects that push my skills in Python, web development, and applied AI. I believe the best way to learn is to build, test, improve, release, and repeat.
        </p>
        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.label} className={styles.statBlock}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.photoWrap} fade-up`} style={{ transitionDelay: '0.15s' }}>
        {/* Place your photo at public/photo.jpg */}
        <img
          src="/Boss_lady.png"
          alt="Martina Namutebi — Junior Software & AI Engineer"
          className={styles.photo}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <span className={styles.overlayHandle}>Logos Intelligence</span>
          <div className={styles.overlayName}>Martina Namutebi </div>
        </div>
      </div>
    </section>
  )
}
