'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Star, Award, TrendingUp } from 'lucide-react'

const stories = [
  {
    name: 'Priya Singh',
    role: 'Professional Makeup Artist',
    location: 'New Delhi',
    image: 'priya',
    story: 'After completing the Professional Makeup Course, I started my own makeup studio within 3 months. The practical training and industry connections from IRA really helped me launch my business successfully.',
    course: 'Professional Makeup Course',
    placement: 'Self-employed - Own Studio',
    testimonial: 'IRA gave me the skills, confidence, and network I needed to succeed!',
    rating: 5
  },
  {
    name: 'Aisha Patel',
    role: 'Senior Hair Stylist',
    location: 'Mumbai',
    image: 'aisha',
    story: 'I joined IRA without any prior experience. The Hair Styling course transformed me completely. Within months of completion, I was hired as a senior stylist at a premium salon in Mumbai.',
    course: 'Hair Styling & Dressing',
    placement: 'Premium Salon - Senior Stylist',
    testimonial: 'The hands-on training made all the difference. I got placed before completing the course!',
    rating: 5
  },
  {
    name: 'Neha Sharma',
    role: 'Freelance Beauty Professional',
    location: 'Bangalore',
    image: 'neha',
    story: 'The Beautician Course gave me comprehensive knowledge in multiple areas. Now I work as a freelance professional doing bridal makeup, hair styling, and skincare services.',
    course: 'Beautician Course',
    placement: 'Freelance Professional',
    testimonial: 'IRA\'s comprehensive curriculum made me a confident all-rounder in the beauty industry.',
    rating: 5
  },
  {
    name: 'Anjali Verma',
    role: 'Bridal Makeup Specialist',
    location: 'Gurgaon',
    image: 'anjali',
    story: 'I took the Advanced Bridal Makeup course and it specialization perfectly matched my passion. Now I exclusively do bridal makeup and earn really well during wedding season.',
    course: 'Advanced Bridal Makeup',
    placement: 'Independent Bridal Artist',
    testimonial: 'Specializing in bridal makeup through IRA was the best decision I made!',
    rating: 5
  },
  {
    name: 'Ritika Desai',
    role: 'Nail Technician',
    location: 'Pune',
    image: 'ritika',
    story: 'The Nail Art course was short but incredibly comprehensive. I learned everything from basic nail care to complex designs and extensions. Now I run my own nail studio.',
    course: 'Nail Art & Extensions',
    placement: 'Own Nail Studio',
    testimonial: 'Professional nail training opened new opportunities for me!',
    rating: 5
  },
  {
    name: 'Divya Kumar',
    role: 'Cosmetologist',
    location: 'Chennai',
    image: 'divya',
    story: 'As a cosmetologist, I now provide professional skincare and spa treatments. The Skin & Cosmetology course at IRA gave me the scientific knowledge and practical skills needed.',
    course: 'Skin & Cosmetology',
    placement: 'Premium Spa & Salon',
    testimonial: 'IRA\'s cosmetology training is industry-standard and highly respected!',
    rating: 5
  },
]

const stats = [
  { number: '2000+', label: 'Happy Graduates', icon: Award },
  { number: '100%', label: 'Placement Rate', icon: TrendingUp },
  { number: '50+', label: 'Partner Organizations', icon: Star },
]

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Success Stories</h1>
          <p className="text-xl text-foreground/60 text-balance">Inspiring journeys of our graduates who transformed their passion into successful careers</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-foreground/60">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-border">
                    <div className="text-center">
                      <Award size={64} className="mx-auto text-primary opacity-50 mb-2" />
                      <p className="text-foreground/60">{story.image}</p>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <div className="flex gap-1 mb-4">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-secondary text-secondary" />
                      ))}
                    </div>

                    <h2 className="text-3xl font-bold text-foreground mb-2">{story.name}</h2>
                    <p className="text-primary font-semibold mb-4">{story.role} • {story.location}</p>

                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-foreground/80 leading-relaxed">{story.story}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-xs text-foreground/60 font-semibold mb-1">COURSE COMPLETED</p>
                        <p className="font-semibold text-foreground">{story.course}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 font-semibold mb-1">PLACEMENT</p>
                        <p className="font-semibold text-primary">{story.placement}</p>
                      </div>
                    </div>

                    <div className="bg-secondary/10 rounded-lg p-4 italic">
                      <p className="text-foreground/80">"{story.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Start Your Success Story Today</h2>
          <p className="text-primary-foreground/90 mb-8 text-balance">
            Join thousands of successful graduates. Your journey to a rewarding career in beauty starts here.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
