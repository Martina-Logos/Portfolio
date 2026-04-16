import styles from './Skills.module.css'

const groups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', pct: 88 },
      { name: 'JavaScript', pct: 85 },
      { name: 'TypeScript', pct: 60 },
    ],
  },
  {
    title: 'AI Engineering',
    skills: [
      { name: 'LLMs', pct: 80 },
      { name: 'RAG', pct: 80 },
      { name: 'AI Agents', pct: 70 },
      { name: 'Prompt Engineering', pct: 75 },
    ],
  },
  {
    title: 'Web Dev',
    skills: [
      { name: 'JavaScript / TS', pct: 80 },
      { name: 'React / Next.js', pct: 72 },
      { name: 'Streamlit', pct: 88 },
      { name: 'Node.js', pct: 70 },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'Git & GitHub', pct: 88 },
      { name: 'Bash', pct: 60 },
      { name: 'Databases', pct: 70 },
      { name: 'APIs', pct: 75 },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'UI/UX Design', pct: 88 },
      { name: 'Documentation', pct: 70 },
      { name: 'Content Writing', pct: 80 },
    ],
  },
  {
    title: 'Currently Learning',
    skills: [
      { name: 'WordPress', pct: 35 },
      { name: 'System Design', pct: 20 },
      { name: 'FastAPI', pct: 45 },
      { name: 'LangChain & LangGraph', pct: 55 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={`${styles.intro} fade-up`}>
        <span className="section-label">skills</span>
        <h2 className="section-title">Tech<br />Stack</h2>
        <p className={styles.sub}>The tools and technologies I reach for when building.</p>
      </div>
      <div className={`${styles.groups} fade-up`} style={{ transitionDelay: '0.1s' }}>
        {groups.map(g => (
          <div key={g.title}>
            <div className={styles.groupTitle}>{g.title}</div>
            {g.skills.map(s => (
              <div key={s.name} className={styles.skillItem}>
                <div className={styles.skillTop}>
                  <span className={styles.skillName}>{s.name}</span>
                  <span className={styles.skillPct}>{s.pct}%</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
