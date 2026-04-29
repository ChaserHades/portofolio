'use client'
import { useState, useEffect, useRef } from 'react'
import { useScrollReveal, useStaggerReveal, useCursorGlow } from '../hooks/useScrollReveal.js'

import Header          from '../components/Header.jsx'
import HeroSection     from '../components/HeroSection.jsx'
import AboutSection    from '../components/AboutSection.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import ContactSection  from '../components/ContactSection.jsx'
import Footer          from '../components/Footer.jsx'

function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="blob absolute rounded-full opacity-[0.08]" style={{ width: 650, height: 650, background: 'radial-gradient(circle,#64ffda,transparent 65%)', top: -208, left: -208 }} />
      <div className="blob blob-2 absolute rounded-full opacity-[0.06]" style={{ width: 520, height: 520, background: 'radial-gradient(circle,#55b4d4,transparent 65%)', top: '45%', right: -144 }} />
      <div className="blob blob-3 absolute rounded-full opacity-[0.05]" style={{ width: 420, height: 420, background: 'radial-gradient(circle,#64ffda,transparent 65%)', bottom: '8%', left: '22%' }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  )
}

function CursorGlow() {
  const ref = useRef(null)
  useCursorGlow(ref)
  return (
    <div
      ref={ref}
      className="cursor-glow"
    />
  )
}

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > 80) setHeaderVisible(y < lastY.current)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useScrollReveal()
  useStaggerReveal()

  return (
    <>
      <AmbientBackground />
      <CursorGlow />
      <Header visible={headerVisible} />
      <main className="relative z-10 px-6 max-w-[1400px] mx-auto">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
