import { Poppins, Space_Mono } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Abiezer Gamaliel | Software Engineer',
  description: 'Portfolio of Abiezer Gamaliel — Software Engineering student, front-end developer, and multimedia creator.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
