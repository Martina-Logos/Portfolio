import styles from './Blog.module.css'

// -----------------------------------------------------------
// ADD YOUR POSTS HERE
// Paste the URL from LinkedIn or Medium into the `url` field.
// Set `featured: true` on the post you want to highlight.
// -----------------------------------------------------------
const posts = [
  {
    title: 'Your Featured Post Title — Something Compelling',
    excerpt: 'A short description of what this post is about. Draw the reader in — what will they learn or take away?',
    date: 'March 2026',
    readTime: '8 min read',
    category: 'AI',
    url: 'https://medium.com/@yourhandle/your-post-slug',
    featured: true,
  },
  {
    title: 'Second Blog Post Title',
    excerpt: 'Short intro or excerpt for this post. One or two sentences is enough.',
    date: 'January 2026',
    readTime: '5 min read',
    category: 'Software',
    url: 'https://linkedin.com/pulse/your-post-slug',
    featured: false,
  },
  {
    title: 'Third Blog Post Title',
    excerpt: 'Short intro or excerpt. Maybe a lessons-learned piece or tutorial.',
    date: 'November 2025',
    readTime: '6 min read',
    category: 'Learnings',
    url: 'https://medium.com/@yourhandle/another-post-slug',
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
