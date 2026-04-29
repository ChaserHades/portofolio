'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const wraps = document.querySelectorAll('.sr-wrap')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const wrap = entry.target
          const content = wrap.querySelector('.sr-content')
          if (!content) return
          content.classList.add('sr-visible')
          observer.unobserve(wrap)
        })
      },
      { threshold: 0.1 }
    )

    wraps.forEach((w) => observer.observe(w))
    return () => observer.disconnect()
  }, [])
}

export function useStaggerReveal() {
  useEffect(() => {
    const containers = document.querySelectorAll('.sr-stagger')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const delay = parseInt(entry.target.dataset.staggerDelay || '0', 10)
          setTimeout(() => {
            entry.target.classList.add('sr-stagger-active')
          }, delay)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )

    containers.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])
}

export function useCursorGlow(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [ref])
}