'use client'

import React, { useState } from 'react'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const faqs = [
    {
      q: 'How can I enroll in a course?',
      a: "You can enroll by filling out the contact form above, calling us, or visiting our academy. We'll guide you through the admission process.",
    },
    {
      q: 'Do you offer flexible payment options?',
      a: 'Yes! We offer flexible payment plans including monthly installments to make education accessible to everyone.',
    },
    {
      q: 'Can I get a trial class before enrollment?',
      a: 'Absolutely! We offer free demo classes for all courses. Contact us to book your demo.',
    },
    {
      q: 'What is your refund policy?',
      a: "We have a flexible refund policy. If you're not satisfied, you can request a refund within 7 days of enrollment.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // ✅ Your exact Google Maps place link
  const placeLink =
    'https://www.google.com/maps/place/Ira+Beauty+Academy/@17.3677943,78.5300372,17z/data=!4m14!1m7!3m6!1s0x3bcb9948332cfb8d:0x2304a0256c78679!2sIra+Beauty+Academy!8m2!3d17.3677892!4d78.5326121!16s%2Fg%2F11yrnb95c0!3m5!1s0x3bcb9948332cfb8d:0x2304a0256c78679!8m2!3d17.3677892!4d78.5326121!16s%2Fg%2F11yrnb95c0?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D'

  // ✅ Correct embed URL for iframe (place query + location)
  const embedSrc =
    'https://www.google.com/maps?hl=en&q=Ira%20Beauty%20Academy%20Chaitanyapuri%20Hyderabad&z=17&output=embed'

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="overflow-x-hidden bg-gradient-to-r from-[#FFF9F8] via-[#FFEDE0] to-[#E4CEFF] py-14 sm:py-20 md:h-[400px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-[22rem] sm:max-w-2xl lg:max-w-3xl">
            <h1 className="leading-tight">
              <TextSplit
                className="w-full justify-center text-3xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4 break-words whitespace-normal leading-tight"
                topClassName="text-primary"
                bottomClassName="text-primary/80"
                maxMove={50}
                falloff={0.14}
              >
                Contact Us
              </TextSplit>
            </h1>

            <div className="mt-1 sm:mt-0">
              <TextSplit
                className="w-full justify-center text-base sm:text-lg md:text-xl text-black break-words whitespace-normal leading-relaxed"
                topClassName="text-black"
                bottomClassName="text-black/80"
                maxMove={40}
                falloff={0.16}
              >
                Get in touch with us for inquiries, admissions, or more information
              </TextSplit>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <a href="tel:+919876543210" className="text-primary font-semibold hover:underline">
                +91 9876 543 210
              </a>
              <p className="text-foreground/60 text-sm mt-2">Mon - Fri, 10am - 6pm</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <a href="mailto:info@irabeautyacademy.com" className="text-primary font-semibold hover:underline">
                info@irabeautyacademy.com
              </a>
              <p className="text-foreground/60 text-sm mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-foreground/70 font-semibold">Chaitanyapuri, Hyderabad, Telangana, India</p>
              <p className="text-foreground/60 text-sm mt-2">By appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Cards */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT - MAP */}
            <div className="w-full group">
              <div className="relative h-[420px] rounded-2xl overflow-hidden border border-border">
                {/* zoom wrapper */}
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
                  <iframe
                    src={embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ira Beauty Academy Location"
                    className="pointer-events-none"
                  />
                </div>

                <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              <a
                href={placeLink}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-primary mt-3 text-center hover:underline"
              >
                Open in Google Maps
              </a>
            </div>

            {/* RIGHT - 3 cards */}
            <div className="w-full flex flex-col gap-5">
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-4 bg-green-500 text-white rounded-2xl p-6 hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={32} />
                <div>
                  <p className="font-bold">Chat on WhatsApp</p>
                  <p className="text-sm opacity-90">Quick response guaranteed</p>
                </div>
              </a>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-foreground/70 text-sm">
                  <p>
                    <span className="font-semibold">Monday - Friday:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-5xl mx-auto space-y-4 text-left">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-colors ${
                    isOpen ? 'border-amber-300 bg-amber-50/40' : 'border-border bg-card'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4"
                  >
                    <span className="text-base sm:text-lg font-medium text-foreground">{faq.q}</span>

                    <span
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        isOpen ? 'bg-amber-200/70' : 'bg-amber-100'
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-270'}`}
                      >
                        <path
                          d="M8 10l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`mx-5 sm:mx-6 mb-5 rounded-lg bg-white text-foreground/80 transition-all duration-300 ${
                          isOpen ? 'border border-amber-300 px-4 sm:px-5 py-4 mt-2' : 'border-0 p-0 mt-0'
                        }`}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface TextSplitProps {
  children: string
  className?: string
  topClassName?: string
  bottomClassName?: string
  maxMove?: number
  falloff?: number
}

export const TextSplit = ({
  children,
  className,
  topClassName,
  bottomClassName,
  maxMove = 50,
  falloff = 0.3,
}: TextSplitProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const getOffset = (index: number) => {
    if (hoverIndex === null) return 0
    const distance = Math.abs(index - hoverIndex)
    return Math.max(0, maxMove * (1 - distance * falloff))
  }

  return (
    <div className={cn('relative flex flex-wrap items-center justify-center max-w-full', className)}>
      {children.split('').map((char, index) => {
        const offset = getOffset(index)
        const displayChar = char === ' ' ? '\u00A0' : char

        return (
          <div
            key={`${char}-${index}`}
            className="relative flex flex-col h-[1em] w-auto min-w-0 leading-none"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <motion.span
              initial={false}
              animate={{ y: `-${offset}%` }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={cn('overflow-hidden', topClassName)}
            >
              {displayChar}
            </motion.span>

            <motion.span
              initial={false}
              animate={{ y: `${offset}%` }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={cn('overflow-hidden', bottomClassName)}
            >
              <span className="block -translate-y-1/2">{displayChar}</span>
            </motion.span>
          </div>
        )
      })}
    </div>
  )
}