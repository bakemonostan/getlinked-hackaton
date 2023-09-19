import Navbar from '@/components/ui/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'GetLinked',
  description: 'Igniting a Revolution in HR Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${montserrat.variable} ${inter.variable} font-sans`}>
      <body className='bg-secondary'>
      <main>
      <Navbar/>
        {children}
        
      </main>
      </body>
    </html>
  )
}
