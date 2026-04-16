import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    title: 'Project Alpha',
    desc: 'A brief description of what this project does, the problem it solves, and what makes it interesting. Keep it to 2–3 sentences.',
    tags: ['Python', 'FastAPI', 'React'],
    link: 'https://github.com/yourusername',
  },
  {
    num: '02',
    title: 'Project Beta',
    desc: 'Another project description. Highlight the tech used, your role, and any interesting outcomes or learnings from building it.',
    tags: ['PyTorch', 'LangChain', 'Streamlit'],
    link: 'https://github.com/yourusername',
  },
  {
    num: '03',
    title: 'Project Gamma',
    desc: 'Third project — perhaps an open source contribution, hackathon build, or academic project. What did you learn building it?',
    tags: ['TypeScript', 'Next.js', 'OpenAI'],
    link: 'https://github.com/yourusername',
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
