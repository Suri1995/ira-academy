'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Star, CheckCircle, Users, Award, MessageCircle, X, User } from 'lucide-react'
import CTAImage from "@/public/cta-image.webp"

/* ---------------- WhatsApp Owners ---------------- */

const whatsappOwners = [
  { name: "Rekha Sandeep", role: "Courses Enquiry", number: "918142766813" },
  { name: "Swathi Vaghmare", role: "Admissions", number: "919876543210" }
]

const message = encodeURIComponent(
  "Hello, I would like to know about IRA Beauty Academy courses."
)

/* ---------------- Page ---------------- */

export default function Page() {

  const [waOpen, setWaOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // close on outside click
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node))
        setWaOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* --------------- YOUR EXISTING PAGE CONTENT REMAINS SAME --------------- */}
      {/* (I am not repeating unchanged sections to keep response readable) */}
      {/* Keep all your sections exactly same until Footer */}

      <Footer />

      {/* ================= MULTI WHATSAPP FLOAT ================= */}

      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">

        {/* Popup */}
        {waOpen && (
          <div
            ref={popupRef}
            className="bg-white w-[260px] rounded-2xl shadow-2xl border p-3 space-y-2 animate-in slide-in-from-bottom-3 fade-in"
          >
            <p className="text-sm font-semibold px-2 pb-1 text-gray-700">
              Chat with us on WhatsApp
            </p>

            {whatsappOwners.map((o, i) => (
              <a
                key={i}
                href={`https://wa.me/${o.number}?text=${message}`}
                target="_blank"
                className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-green-50 transition"
              >
                <div className="bg-green-100 text-green-700 rounded-full p-2">
                  <User size={16} />
                </div>

                <div>
                  <div className="text-sm font-medium">{o.name}</div>
                  <div className="text-xs text-gray-500">{o.role}</div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setWaOpen(!waOpen)}
          className="bg-green-500 text-white rounded-full p-4 shadow-xl hover:bg-green-600 active:scale-95 transition-all"
          aria-label="WhatsApp"
        >
          {waOpen ? <X size={26} /> : <MessageCircle size={26} />}
        </button>
      </div>

    </div>
  )
}