'use client'

import React from "react"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', course: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Contact Us</h1>
          <p className="text-xl text-foreground/60 text-balance">Get in touch with us for inquiries, admissions, or more information</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
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

            {/* Email */}
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

            {/* Location */}
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-foreground/70 font-semibold">
                New Delhi, India
              </p>
              <p className="text-foreground/60 text-sm mt-2">By appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you! We've received your message. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Course of Interest</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="">Select a course</option>
                    <option value="makeup">Professional Makeup Course</option>
                    <option value="hair">Hair Styling & Dressing</option>
                    <option value="skin">Skin & Cosmetology</option>
                    <option value="nails">Nail Art & Extensions</option>
                    <option value="beautician">Beautician Course</option>
                    <option value="bridal">Advanced Bridal Makeup</option>
                    <option value="workshop">Short-term Workshop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                    placeholder="Tell us more about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-primary opacity-50 mb-2" />
                  <p className="text-foreground/60">Google Maps Location</p>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
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

              {/* Social Links */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-foreground/70 text-sm">
                  <p><span className="font-semibold">Monday - Friday:</span> 10:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Have Questions?</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How can I enroll in a course?',
                a: 'You can enroll by filling out the contact form above, calling us, or visiting our academy. We\'ll guide you through the admission process.'
              },
              {
                q: 'Do you offer flexible payment options?',
                a: 'Yes! We offer flexible payment plans including monthly installments to make education accessible to everyone.'
              },
              {
                q: 'Can I get a trial class before enrollment?',
                a: 'Absolutely! We offer free demo classes for all courses. Contact us to book your demo.'
              },
              {
                q: 'What is your refund policy?',
                a: 'We have a flexible refund policy. If you\'re not satisfied, you can request a refund within 7 days of enrollment.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
