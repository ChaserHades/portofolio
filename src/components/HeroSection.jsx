'use client'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-28"
    >
      <p
        className="hero-item font-mono text-teal text-sm tracking-widest mb-5"
        style={{ '--hi-delay': '200ms' }}
      >
        Hi, my name is
      </p>

      <h1
        className="hero-item font-bold text-slate-lightest leading-tight mb-2"
        style={{ fontSize: 'clamp(38px,7.5vw,78px)', '--hi-delay': '380ms' }}
      >
        Abiezer Gamaliel.
      </h1>

      <h2
        className="hero-item font-bold text-slate leading-tight mb-10"
        style={{ fontSize: 'clamp(26px,5vw,56px)', '--hi-delay': '520ms' }}
      >
        I build digital experiences<br />that actually matter.
      </h2>

      <div
        className="hero-item glass-card rounded-2xl p-6 max-w-lg mb-10"
        style={{ '--hi-delay': '680ms' }}
      >
        <p className="text-slate-light leading-relaxed text-[0.95rem]">
          Software Engineering student at Satya Wacana Christian University.
          I bridge creative instinct — shaped by years of photography and multimedia work —
          with technical precision to build interfaces users genuinely enjoy.
        </p>
      </div>

      <div
        className="hero-item flex flex-wrap gap-4"
        style={{ '--hi-delay': '820ms' }}
      >
        <a
          href="#projects"
          className="glass-teal border-pulse font-mono text-sm text-teal no-underline rounded-xl px-7 py-3 transition-all duration-300 hover:bg-teal/10 hover:-translate-y-0.5"
        >
          Explore My Work
        </a>
        <a
          href="mailto:gamalielabiezer@gmail.com"
          className="glass font-mono text-sm text-slate-light no-underline rounded-xl px-7 py-3 transition-all duration-300 hover:text-teal hover:-translate-y-0.5"
        >
          Say Hello →
        </a>
      </div>

      <div
        className="hero-item mt-20 flex flex-col items-start gap-1.5"
        style={{ '--hi-delay': '1000ms' }}
      >
        <div className="w-px h-14 ml-0.5" style={{ background: 'linear-gradient(to bottom, #64ffda, transparent)' }} />
        <span className="font-mono text-slate text-[10px] tracking-[0.3em]">SCROLL</span>
      </div>
    </section>
  )
}
