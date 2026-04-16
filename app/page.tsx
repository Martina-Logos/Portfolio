import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
