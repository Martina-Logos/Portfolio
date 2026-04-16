import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    title: 'HealthBot',
    desc: 'A smart healthcare assistant that helps users understand symptoms, get basic health insights, and make informed wellness decisions.',
    tags: ['Python', 'RAG', 'Streamlit', 'OpenAI API'],
    link: 'https://github.com/TuringCollegeSubmissions/nmarti-AE.2.5',
  },
  {
    num: '02',
    title: 'Interview Coach',
    desc: 'A virtual interview assistant that helps users practice interviews by generating questions and guiding their responses.',
    tags: ['Python', 'Prompt Engineering', 'Streamlit', 'OpenAI API'],
    link: 'https://github.com/TuringCollegeSubmissions/nmarti-AE.1.4',
  },
  {
    num: '03',
    title: 'Inventory Management System',
    desc: 'This was an academic project system that helps track products, manage stock levels, and keep inventory organized.',
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'Pug Templates'],
    link: 'https://github.com/Martina-Logos/MWF-Ltd',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.header} fade-up`}>
        <span className="section-label">projects</span>
        <h2 className="section-title">What I&apos;ve Built</h2>
      </div>
      <div className={`${styles.grid} fade-up`} style={{ transitionDelay: '0.1s' }}>
        {projects.map(p => (
          <a key={p.num} href={p.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.num}>{p.num}</div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
