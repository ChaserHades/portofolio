'use client'
import SR, { SRStagger } from './SR.jsx'
import { skills, certs } from '../data/index.js'

const WORK = [
  {
    tag: 'WORK',
    title: 'Project-Based Web Developer',
    company: 'Eventra.id & Kampuskufloraku.edu.uksw',
    period: 'Mar 2025 – Nov 2025',
    points: [
      'Analyzed client scenarios and translated them into clear team deliverables',
      'Designed user-friendly interfaces aligned with client vision and constraints',
      'Responded promptly to revision requests and new module additions',
    ],
  },
  {
    tag: 'MULTIMEDIA',
    title: 'Photographer / Videographer',
    company: 'Kolaborasa Entertainment – Yogyakarta',
    period: 'Aug 2023 – Jan 2026',
    points: [
      'Captured cinematic event moments without stabilizing gimbals',
      'Produced candid shots with aesthetic composition and angles',
      'Leveraged AI editing tools with manual final-output refinement',
    ],
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      {/* Heading */}
      <SR delay={0} style={{ marginBottom: 56 }}>
        <h2 className="flex items-center gap-4 font-bold text-slate-lightest" style={{ fontSize: 'clamp(22px,3.5vw,30px)' }}>
          <span className="font-mono text-teal" style={{ fontSize: 'clamp(15px,2vw,19px)' }}>01.</span>
          About Me
          <div className="h-px bg-navy-light max-w-[180px] flex-1" />
        </h2>
      </SR>

      {/* Grid */}
      <div className="grid gap-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {/* Text */}
        <div className="flex flex-col gap-5">
          <SR delay={80}>
            <p className="text-slate-light leading-relaxed">
              My journey in tech began not just with code, but with a camera. As a photographer and videographer
              at Kolaborasa Entertainment in Yogyakarta, I learned to see the world through a storytelling lens —
              a skill I apply to every interface I design.
            </p>
          </SR>
          <SR delay={160}>
            <p className="text-slate-light leading-relaxed">
              My involvement in the University Student Senate (Department of Action, Partnership &amp; Communication)
              shaped my ability to coordinate teams and communicate across boundaries. I bring that same
              bridge-building energy to software projects.
            </p>
          </SR>

          {/* Skills */}
          <SR delay={240}>
            <p className="font-mono text-teal text-[10px] tracking-[0.22em] mb-3 mt-4">TECHNICAL SKILLS</p>
            <SRStagger delay={300} as="ul" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, listStyle: 'none' }}>
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className="sr-stagger-child glass rounded-lg px-3 py-2 font-mono text-xs text-slate-light flex items-center gap-2 cursor-default transition-colors duration-200 hover:text-teal"
                  style={{ '--child-delay': `${i * 55}ms` }}
                >
                  <span className="text-teal text-[10px]">▹</span>
                  {skill}
                </li>
              ))}
            </SRStagger>
          </SR>

          {/* Certs */}
          <SR delay={320}>
            <p className="font-mono text-teal text-[10px] tracking-[0.22em] mb-3 mt-2">CERTIFICATIONS</p>
            <ul className="flex flex-col gap-2 list-none">
              {certs.map((cert) => (
                <li key={cert} className="glass-teal rounded-lg px-4 py-2.5 font-mono text-xs text-slate-light flex items-center gap-2">
                  <span className="text-teal">◆</span>
                  {cert}
                </li>
              ))}
            </ul>
          </SR>
        </div>

        {/* Photo */}
        <SR delay={180} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="photo-wrap max-w-[270px] w-full">
            <div className="glass-card rounded-2xl overflow-hidden">
              <img src="/photos/Gamaliel_PDD.jpeg" alt="Abiezer Gamaliel" />
            </div>
            <div className="photo-offset" />
          </div>
        </SR>
      </div>

      {/* Work Experience */}
      <SRStagger delay={120} style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        {WORK.map((w, i) => (
          <div
            key={w.tag}
            className="sr-stagger-child glass-card rounded-2xl p-6"
            style={{ '--child-delay': `${i * 80}ms` }}
          >
            <p className="font-mono text-teal text-[10px] tracking-[0.2em] mb-2">{w.tag}</p>
            <h3 className="text-slate-lightest font-semibold text-base mb-0.5">{w.title}</h3>
            <p className="text-slate text-sm mb-0.5">{w.company}</p>
            <p className="font-mono text-[10px] text-teal mb-4">{w.period}</p>
            <ul className="flex flex-col gap-1.5 list-none">
              {w.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-slate-light">
                  <span className="text-teal shrink-0">▹</span>{pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </SRStagger>
    </section>
  )
}
