import styles from './Experience.module.css'

const items = [
  {
    date: '2025 — present',
    role: 'Software & AI Engineer',
    org: 'Turing College Lithuania',
    desc: 'Building AI-powered tools, contributing to open source, and deepening knowledge in AI systems and software development.',
    tags: ['Python', 'LLMs', 'RAG Systems', 'AI Agents'],
  },
  {
    date: '2025',
    role: 'Generative AI Essentials for Software Developers',
    org: 'Moringa School Kenya',
    desc: 'Learnt to use AI tools and models to build real, reliable applications and proper technicaldocumentation',
    tags: ['AI Tools', 'Working with Existing Codebases', 'Documentation'],
  },
  {
    date: '2025',
    role: 'Certificate in Software Development with Javascript',
    org: 'Refactory Academy Uganda',
    desc: 'The Inventory Management System was one of my first projects, and it helped me understand how real world applications are structured. The goal of the system was to help track products, manage stock levels, and keep inventory records in an organized way, instead of relying on manual tracking.',
    tags: ['UI/UX', 'Node.js', 'JavaScript'],
  },
  {
    date: '2025',
    role: 'Certificate in Soft Skills Training',
    org: 'Brighter Monday Uganda',
    desc: 'I undertook soft skills training covering communication, teamwork, adaptability, and problem solving, strengthening my ability to work effectively in professional and collaborative environments.',
    tags: ['Creativity & Problem Solving', 'Emotional Intelligence', 'Employability Skills'],
  },
  {
              date: '2023',
              role: 'Certificate in Leadership & Entreepreneurship',
    org: 'Educate Uganda',
    desc: 'Throughout the training, I actively engaged in practical activities such as group work, projects, and idea development, applying learned concepts in real environments.',
    tags: ['Leadership', 'Entrepreneurship', 'Communication Development'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="fade-up">
        <span className={styles.label}>experience</span>
        <h2 className={styles.title}>Where I&apos;ve<br />Learned</h2>
      </div>
      <div className={`${styles.timeline} fade-up`} style={{ transitionDelay: '0.1s' }}>
        {items.map(item => (
          <div key={item.date} className={styles.item}>
            <div className={styles.date}>{item.date}</div>
            <div>
              <div className={styles.role}>{item.role}</div>
              <div className={styles.org}>{item.org}</div>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.tags}>
                {item.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
