'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Star, CheckCircle, Users, Award, Sparkles, MessageCircle } from 'lucide-react'
import CTAImage from "@/public/cta-image.webp"

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
    image: '/make-up-artist-image.jpg',
    description: 'Master bridal, party, and everyday makeup techniques'
  },
  {
    title: 'Hair Styling & Dressing',
    duration: '2.5 Months',
    image: '/female-making-hairstyle.jpg',
    description: 'Learn cutting, styling, and coloring expertise'
  },
  {
    title: 'Skin & Cosmetology',
    duration: '3 Months',
    image: '/professional-skin-care-therapy.jpg',
    description: 'Professional skincare and facial treatments'
  },
  {
    title: 'Nail Art & Extensions',
    duration: '1.5 Months',
    image: '/nail-extensions.jpg',
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
      <section className="min-h-[600px] bg-[linear-gradient(to_right,hsl(43_74%_45%)_0%,hsl(43_74%_60%)_35%,hsl(43_74%_72%)_50%,hsl(43_74%_60%)_65%,hsl(43_74%_45%)_100%)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-balance">
              <h1 className="text-4xl sm:text-[52px] font-bold text-orange-900 mb-6 leading-none">
                Transform Your Passion into a Professional Beauty Career
              </h1>
              <p className="text-lg text-black font-medium mb-8 text-balance">
                Beauty courses, certifications, and hands-on training with certified trainers. Get 100% placement assistance and affordable fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-black hover:bg-amber-950 hover:text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Enroll Now
                </Link>
                <button
                  onClick={handleDemo}
                  className="border-2 border-white text-white hover:border-amber-950 hover:text-amber-950 px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-border bg-black">

  <div className="relative w-full aspect-video">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/ira-video.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="metadata"
    />
  </div>

</div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
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
                  className="bg-card hover:bg-indigo-50 rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
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
<div className="h-48 relative overflow-hidden group rounded-t-2xl">
  <Image
    src={course.image}
    alt={course.title}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-110"
    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
  />
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
      <section className="py-10 sm:py-20 bg-cyan-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-cyan-100 to-green-200" />
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-lime-400/40 blur-2xl" />
      <div className="pointer-events-none absolute left-24 top-6 h-56 w-56 rounded-full bg-emerald-300/30 blur-2xl" />
      <div className="pointer-events-none absolute left-40 -bottom-24 h-72 w-72 rounded-full bg-cyan-400/25 blur-2xl" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-6 px-5 py-8 sm:px-10 sm:py-0 sm:pt-3 lg:grid-cols-[280px_1fr_auto] lg:gap-10">
        {/* Image */}
        <div className="relative mx-auto h-44 w-44 overflow-hidden sm:h-52 sm:w-52 lg:mx-0 lg:h-56 lg:w-56">
          <Image
            src={CTAImage}
            alt="CTA Image"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 240px"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left md:w-[500px]">
          <div className="text-cyan-900 font-inter font-bold tracking-wide text-xs sm:text-sm">
            GOT QUESTIONS?
          </div>
          <h3 className="mt-2 font-inter font-bold text-heading text-lg sm:text-2xl lg:text-3xl leading-snug">
            Still Have A Question? Get In Touch With Our Team!
          </h3>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-end">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-600 px-6 py-3 text-white font-semibold shadow-sm transition hover:bg-orange-700 active:scale-[0.98] whitespace-nowrap lg:text-[18px]"
          >
            Reach Us
          </a>
        </div>
      </div>
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