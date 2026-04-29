'use client'
import SR from './SR.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 text-center max-w-[580px] mx-auto">
      <SR delay={0} style={{ marginBottom: 24 }}>
        <h2 className="flex items-center justify-center gap-4 font-bold text-slate-lightest" style={{ fontSize: 'clamp(22px,3.5vw,30px)' }}>
          <span className="font-mono text-teal" style={{ fontSize: 'clamp(15px,2vw,19px)' }}>03.</span>
          Get In Touch
        </h2>
      </SR>

      <SR delay={90} style={{ marginBottom: 32 }}>
        <h3 className="font-bold text-slate-lightest" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)' }}>
          Let's Build Something Great.
        </h3>
      </SR>

      <SR delay={180} style={{ marginBottom: 32 }}>
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden isolate">
          {/* shimmer overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: 'linear-gradient(135deg,transparent 0%,rgba(100,255,218,0.03) 40%,rgba(255,255,255,0.05) 50%,rgba(100,255,218,0.03) 60%,transparent 100%)',
              backgroundSize: '200% 200%',
              animation: 'shimmer-drift 6s ease-in-out infinite',
            }}
          />
          <p className="text-slate-light leading-relaxed mb-6 text-[0.95rem] relative z-10">
            Open to collaborations, interesting problems, and good conversations.
            Whether you have a project in mind or just want to connect — my inbox is always open.
          </p>
          <div className="flex flex-wrap gap-3 justify-center font-mono text-sm text-slate relative z-10">
            <span className="glass rounded-lg px-4 py-2">gamalielabiezer@gmail.com</span>
            <span className="glass rounded-lg px-4 py-2">0851 6280 0441</span>
          </div>
        </div>
      </SR>

      <SR delay={300}>
        <a
          href="mailto:gamalielabiezer@gmail.com"
          className="glass-teal border-pulse font-mono text-sm text-teal no-underline rounded-2xl px-10 py-4 inline-block transition-all duration-300 hover:bg-teal/10 hover:-translate-y-0.5"
        >
          Say Hello ✉
        </a>
      </SR>
    </section>
  )
}
