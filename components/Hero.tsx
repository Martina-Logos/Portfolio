import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.tag}>available for opportunities</span>
        <h1 className={styles.name}>Martina <em>Namutebi</em><br />Here</h1>
        <p className={styles.desc}>
          Junior Software &amp; AI Engineer, who is interested in applying technology to solve real world problems and improving systems through intelligent solutions.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>view projects</a>
          <a href="#contact" className={styles.btnOutline}>get in touch</a>
          {/* CV download — place your PDF at public/cv.pdf */}
          <a href="/Meine CV.pdf" download className={styles.btnOutline}>download cv</a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.terminal}>
          <div className={styles.bar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <p className={styles.line}><span className={styles.cmd}>$ whoami</span></p>
          <p className={styles.line}><span className={styles.out}>&gt; martina_namutebi</span></p>
          <p className={`${styles.line} ${styles.mt}`}><span className={styles.cmd}>$ cat interests.txt</span></p>
          <p className={styles.line}><span className={styles.out}>&gt; AI, web dev, documentation</span></p>
          <p className={styles.line}><span className={styles.out}>&gt; building AI applications & systems</span></p>
          <p className={`${styles.line} ${styles.mt}`}><span className={styles.cmd}>$ echo $STATUS</span></p>
          <p className={styles.line}><span className={styles.out}>&gt; learning every day</span></p>
          <p className={`${styles.line} ${styles.mt}`}><span className={styles.cmd}>$ _</span><span className={styles.cursor} /></p>
        </div>
        <a href="#about" className={styles.scroll}>scroll</a>
      </div>
    </section>
  )
}
