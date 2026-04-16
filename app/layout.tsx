import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Martina Namutebi — Junior Software & AI Engineer',
  description: 'Junior Software & AI Engineer building thoughtful tools at the intersection of code and intelligence.',
  openGraph: {
    title: 'Martina Namutebi — Junior Software & AI Engineer',
    description: 'Junior Software & AI Engineer building thoughtful tools at the intersection of code and intelligence.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
