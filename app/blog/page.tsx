import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import styles from './blog.module.css'

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <Link href="/#blog" className={styles.back}>← back home</Link>
        <span className="section-label">blog</span>
        <h1 className={styles.title}>All Posts</h1>
      </div>
      <div className={styles.list}>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.item}>
            <div className={styles.itemMeta}>
              <span className={styles.cat}>{post.category}</span>
              <span className={styles.date}>{post.date} · {post.readTime}</span>
            </div>
            <h2 className={styles.itemTitle}>{post.title}</h2>
            <p className={styles.itemExcerpt}>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
