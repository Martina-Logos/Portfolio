import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/label.png',
  },
  title: 'Martina Namutebi — Junior Software & AI Engineer',
  description: 'Junior Software & AI Engineer who is interested in applying technology to solve real world problems and improving systems through intelligent solutions.',
  openGraph: {
    title: 'Martina Namutebi — Junior Software & AI Engineer',
    description: 'Junior Software & AI Engineer who is interested in applying technology to solve real world problems and improving systems through intelligent solutions.',
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
