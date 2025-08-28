import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ToasterProvider } from '@/components/ToasterProvider'
import Foot from '@/components/Foot'

export const metadata: Metadata = {
  title: 'Dammy Stores',
  description: 'Say goodbye to traditional mops that just push dirt around. Our CleanPro Mop uses advanced microfiber technology and 360° rotation to deliver spotless results every time.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className='min-h-screen flex flex-col  w-full overflow-hidden relative '>
          <div className='flex flex-col flex-1 overflow-y-auto scrollbar-hide'> {children}</div>
          <Foot />
        </div>
        <ToasterProvider />
      </body>
    </html>
  )
}
