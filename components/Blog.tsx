import styles from './Blog.module.css'

// -----------------------------------------------------------
// ADD YOUR POSTS HERE
// Paste the URL from LinkedIn or Medium into the `url` field.
// Set `featured: true` on the post you want to highlight.
// -----------------------------------------------------------
const posts = [
  {
    title: 'AI',
    excerpt: 'Adapt or Be Replaced: The Real AI Conversation',
    date: 'April 2025',
    readTime: '5 min read',
    category: 'AI',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7430146566390353920/?originTrackingId=%2FOiJTw%2FmU42sd8r4NxBSZw%3D%3D',
    featured: true,
  },
  {
    title: 'Software',
    excerpt: 'Boolean Logic: The Art of Yes and No',
    date: 'August 2025',
    readTime: '5 min read',
    category: 'Software',
    url: 'https://medium.com/@martinanamutebi/boolean-logic-the-art-of-yes-and-no-1efeebda3733',
    featured: false,
  },
  {
    title: 'Learnings',
    excerpt: 'Stop Chasing Goals. Start Building Systems.',
    date: 'February 2026',
    readTime: '4 min read',
    category: 'Learnings',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7427335404078489600/',
    featured: false,
  },
]

export default function Blog() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <section id="blog" className={styles.blog}>
      <div className="fade-up">
        <span className="section-label">blog</span>
        <h2 className="section-title">Writing &amp;<br />Thinking</h2>
      </div>

      <div className={`${styles.grid} fade-up`} style={{ transitionDelay: '0.1s' }}>

        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.featured}`}
          >
            <div>
              <span className={styles.cat}>{featured.category}</span>
              <h3 className={styles.cardTitle}>{featured.title}</h3>
              <p className={styles.excerpt}>{featured.excerpt}</p>
              <div className={styles.meta}>{featured.date} · {featured.readTime}</div>
            </div>
            <div className={styles.featuredRight}>
              <span className={styles.readMore}>read full post ↗</span>
            </div>
          </a>
        )}

        {rest.map(post => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <span className={styles.cat}>{post.category}</span>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.footer}>
              <div className={styles.meta}>{post.date} · {post.readTime}</div>
              <span className={styles.readMore}>read ↗</span>
            </div>
          </a>
        ))}

      </div>
    </section>
  )
}
