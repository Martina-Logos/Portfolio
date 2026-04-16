import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import styles from './post.module.css'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} — Your Name`, description: post.excerpt }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <Link href="/#blog" className={styles.back}>← back to blog</Link>
        <span className={styles.cat}>{post.category}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>{post.date} · {post.readTime}</div>
      </div>
      <article className={styles.body}>
        <MDXRemote source={post.content} />
      </article>
    </main>
  )
}
