'use client'
import { useState } from 'react'
import SR from './SR.jsx'
import { projects, CRUD_CODE } from '../data/index.js'

function ProjectCard({ project, index }) {
  const [imgIdx, setImgIdx] = useState(0)
  const next = () => setImgIdx((i) => (i + 1) % project.images.length)
  const prev = () => setImgIdx((i) => (i - 1 + project.images.length) % project.images.length)

  const contentPane = (
    <SR delay={index * 60} style={{ position: 'relative', zIndex: 20, width: '100%' }}>
      <p className="font-mono text-teal text-[10px] tracking-[0.2em] mb-2">{project.type}</p>
      <h3
        className="text-slate-lightest font-bold text-xl mb-4 leading-snug"
        style={{ textAlign: project.reverse ? 'right' : 'left' }}
      >
        {project.title}
      </h3>
      <div className="glass-card rounded-2xl p-5 mb-4 text-sm text-slate-light leading-relaxed">
        {project.desc}
      </div>
      <ul
        className="flex flex-wrap gap-2 mb-5 list-none"
        style={{ justifyContent: project.reverse ? 'flex-end' : 'flex-start' }}
      >
        {project.tools.map((t) => (
          <li key={t} className="glass rounded-full px-3 py-1 font-mono text-xs text-slate">
            {t}
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: project.reverse ? 'flex-end' : 'flex-start' }}>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-teal font-mono text-sm text-teal no-underline rounded-xl px-5 py-2.5 transition-all duration-300 hover:bg-teal/10 hover:-translate-y-0.5"
          >
            {project.linkLabel} ↗
          </a>
        ) : (
          <span className="glass font-mono text-xs text-slate rounded-xl px-5 py-2.5 opacity-45 cursor-not-allowed">
            {project.linkLabel}
          </span>
        )}
      </div>
    </SR>
  )

  const imagePane = (
    <SR delay={index * 60 + 100} style={{ position: 'relative', zIndex: 10, width: '100%' }}>
      {project.images.length > 0 ? (
        <div
          className="project-img-wrap rounded-2xl overflow-hidden relative"
          style={{
            aspectRatio: '16/10',
            border: '1px solid rgba(100,255,218,0.1)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            transition: 'border-color 0.5s',
          }}
        >
          {project.images.map((src, ii) => (
            <img
              key={src}
              src={src}
              alt={project.title}
              style={{
                position: ii === 0 ? 'relative' : 'absolute',
                inset: 0, width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: imgIdx === ii ? 1 : 0,
                transform: imgIdx === ii ? 'scale(1)' : 'scale(1.03)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                display: 'block',
              }}
            />
          ))}
          <div className="absolute inset-0 pointer-events-none z-10" style={{ background: 'linear-gradient(to top,rgba(10,25,47,0.55),transparent)' }} />
          {project.images.length > 1 && (
            <div className="glass gallery-controls absolute bottom-3 right-3 z-20 rounded-full flex items-center gap-2 px-3 py-1.5">
              <button onClick={prev} className="bg-transparent border-none text-slate-lightest font-mono text-sm cursor-pointer">&lt;</button>
              <span className="font-mono text-xs text-slate-lightest">{imgIdx + 1} / {project.images.length}</span>
              <button onClick={next} className="bg-transparent border-none text-slate-lightest font-mono text-sm cursor-pointer">&gt;</button>
            </div>
          )}
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-6 flex items-center justify-center overflow-hidden" style={{ aspectRatio: '16/10' }}>
          <pre className="font-mono text-[0.72rem] text-slate-light opacity-40 leading-relaxed select-none">
            {CRUD_CODE}
          </pre>
        </div>
      )}
    </SR>
  )

  return (
    <article style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16, alignItems: 'center' }}>
      <div style={{ gridColumn: project.reverse ? '7 / 13' : '1 / 7' }}>{contentPane}</div>
      <div style={{ gridColumn: project.reverse ? '1 / 8' : '6 / 13', gridRow: project.reverse ? 1 : 'auto' }}>{imagePane}</div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <SR delay={0} style={{ marginBottom: 80 }}>
        <h2 className="flex items-center gap-4 font-bold text-slate-lightest" style={{ fontSize: 'clamp(22px,3.5vw,30px)' }}>
          <span className="font-mono text-teal" style={{ fontSize: 'clamp(15px,2vw,19px)' }}>02.</span>
          Things I've Built
          <div className="h-px bg-navy-light max-w-[180px] flex-1" />
        </h2>
      </SR>
      <div className="flex flex-col gap-32">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
