'use client'

export default function SR({
  children,
  delay = 0,
  as: Tag = 'div',
  style,
  className = '',
  contentStyle,
}) {
  return (
    <Tag
      className={`sr-wrap ${className}`}
      style={style}
    >
      <div className="sr-content" style={contentStyle}>
        {children}
      </div>
    </Tag>
  )
}

export function SRStagger({ children, delay = 0, as: Tag = 'div', style, className = '' }) {
  return (
    <Tag
      className={`sr-stagger ${className}`}
      data-stagger-delay={delay}
      style={style}
    >
      {children}
    </Tag>
  )
}