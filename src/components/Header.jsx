'use client'

const NAV = [
  ['#about',    '01', 'About'],
  ['#projects', '02', 'Projects'],
  ['#contact',  '03', 'Contact'],
]

export default function Header({ visible }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="glass mx-4 mt-3 rounded-2xl px-6 py-3 flex items-center justify-between">
        <span className="font-mono text-teal font-bold text-xl tracking-wide">AG.</span>
        <ol className="flex gap-6 list-none">
          {NAV.map(([href, num, label]) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-slate-lightest text-sm no-underline transition-colors duration-200 hover:text-teal"
              >
                <span className="text-teal text-xs mr-1">{num}.</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </header>
  )
}
