import React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'IRA Beauty Academy - Professional Beauty Training',
  description:
    'Transform your passion into a professional beauty career with certified trainers, hands-on training, and 100% placement assistance.',
  generator: 'v0.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="min-h-dvh w-full overflow-x-clip">
          <Navigation />
          <main className="pt-16 md:pt-20 w-full min-w-0 overflow-x-clip">{children}</main>
        </div>
      </body>
    </html>
  )
}