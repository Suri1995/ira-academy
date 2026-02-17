'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-[8px]">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img
              src="/ira-logo.jpeg"
              alt="IRA Beauty Academy"
              className="h-10 w-auto md:h-[56px]"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm sm:text-[18px] sm:font-semibold font-medium hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={[
          'md:hidden fixed inset-0 z-50',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!isOpen}
      >
        <div
          className={[
            'absolute inset-0 bg-black/40 transition-opacity duration-200',
            isOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={[
            'absolute left-0 right-0 top-0 bg-white border-b border-border',
            'transition-transform duration-200',
            isOpen ? 'translate-y-0' : '-translate-y-full',
          ].join(' ')}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <img src="/ira-logo.jpeg" alt="IRA Beauty Academy" className="h-10 w-auto" />
              </Link>

              <button
                className="inline-flex items-center justify-center rounded-md p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
              <div className="max-h-[70vh] overflow-auto space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-black/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* <Link
                href="/contact"
                className="mt-4 block bg-primary text-primary-foreground px-6 py-3 rounded-full text-center font-medium hover:opacity-90 transition-opacity w-full"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}