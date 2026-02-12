'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Star, CheckCircle, Users, Award, Sparkles, MessageCircle } from 'lucide-react'

const highlights = [
  { icon: CheckCircle, title: 'Certified Trainers', description: 'Learn from industry experts' },
  { icon: Star, title: 'Practical Training', description: 'Hands-on experience with real models' },
  { icon: Users, title: '100% Placement', description: 'Career assistance guaranteed' },
  { icon: Award, title: 'Affordable Fees', description: 'Competitive pricing with flexible plans' },
]

const courses = [
  {
    title: 'Professional Makeup Course',
    duration: '3 Months',
    image: 'makeup',
    description: 'Master bridal, party, and everyday makeup techniques'
  },
  {
    title: 'Hair Styling & Dressing',
    duration: '2.5 Months',
    image: 'hair',
    description: 'Learn cutting, styling, and coloring expertise'
  },
  {
    title: 'Skin & Cosmetology',
    duration: '3 Months',
    image: 'skin',
    description: 'Professional skincare and facial treatments'
  },
  {
    title: 'Nail Art & Extensions',
    duration: '1.5 Months',
    image: 'nails',
    description: 'Master nail design and extension techniques'
  },
]

const testimonials = [
  {
    name: 'Priya Singh',
    role: 'Professional Makeup Artist',
    text: 'IRA Academy transformed my passion into a successful career. The trainers are incredibly supportive!',
    rating: 5
  },
  {
    name: 'Aisha Patel',
    role: 'Hair Stylist',
    text: 'The practical training and placement assistance made all the difference. I got placed within a month!',
    rating: 5
  },
  {
    name: 'Neha Sharma',
    role: 'Beautician',
    text: 'Best investment I made. The curriculum is industry-focused and the fees are very reasonable.',
    rating: 5
  },
]

export default function Page() {
  const [email, setEmail] = useState('')

  const handleDemo = () => {
    alert('Demo booking coming soon! Please call us at +91 9876 543 210')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="mt-16 min-h-[600px] bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-balance">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transform Your Passion into a Professional Beauty Career
              </h1>
              <p className="text-lg text-foreground/70 mb-8 text-balance">
                Beauty courses, certifications, and hands-on training with certified trainers. Get 100% placement assistance and affordable fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Enroll Now
                </Link>
                <button
                  onClick={handleDemo}
                  className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-background flex items-center justify-center border border-border">
              {/* Logo height set to 70px as requested */}
              <img 
                src="/logo.png" 
                alt="IRA Beauty Academy Logo" 
                style={{ height: '80px' }} 
                className="w-auto object-contain p-2"   
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose IRA Beauty Academy?</h2>
            <p className="text-lg text-foreground/60 text-balance">Everything you need for a successful beauty career</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-foreground/60 text-sm">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Courses</h2>
            <p className="text-lg text-foreground/60 text-balance">Choose from our professional beauty training programs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles size={48} className="mx-auto text-primary mb-2" />
                    <p className="text-foreground/60 text-sm">{course.image}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{course.duration}</p>
                  <p className="text-foreground/60 text-sm mb-4">{course.description}</p>
                  <Link
                    href="/courses"
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/courses"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Student Testimonials</h2>
            <p className="text-lg text-foreground/60 text-balance">Hear from our successful graduates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Stay Updated</h2>
          <p className="text-primary-foreground/90 mb-8 text-balance">Subscribe to get updates about new courses and special offers</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full bg-white text-foreground placeholder:text-foreground/50 focus:outline-none"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <Footer />
    </div>
  )
}