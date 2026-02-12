'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Clock, Award, DollarSign, BookOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Professional Makeup Course',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description: 'Master the art of makeup with our comprehensive professional course. Learn bridal makeup, party makeup, and everyday makeup techniques.',
    curriculum: ['Face Mapping & Contouring', 'Bridal Makeup Techniques', 'Party & Event Makeup', 'Corrective Makeup', 'Color Theory'],
    certification: 'Recognized Professional Makeup Artist Certificate',
    image: 'makeup'
  },
  {
    title: 'Hair Styling & Hair Dressing',
    duration: '2.5 Months',
    level: 'Beginner to Intermediate',
    description: 'Become an expert in hair styling and design. Learn cutting, coloring, and styling techniques from industry professionals.',
    curriculum: ['Hair Basics & Health', 'Hair Cutting Techniques', 'Hair Coloring & Trends', 'Styling Techniques', 'Chemical Treatments'],
    certification: 'Professional Hair Stylist Certification',
    image: 'hair'
  },
  {
    title: 'Skin & Cosmetology',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description: 'Learn comprehensive skincare and cosmetology treatments. Master facial techniques and skincare product knowledge.',
    curriculum: ['Skin Biology & Anatomy', 'Facial Treatments', 'Chemical Peels', 'Threading & Waxing', 'Anti-Aging Techniques'],
    certification: 'Professional Cosmetologist Certificate',
    image: 'skin'
  },
  {
    title: 'Nail Art & Extensions',
    duration: '1.5 Months',
    level: 'Beginner to Intermediate',
    description: 'Master nail art and extension techniques. Learn to create stunning nail designs and apply various extension methods.',
    curriculum: ['Nail Anatomy', 'Basic Nail Art', 'Advanced Designs', 'Gel Extensions', 'Acrylic Application'],
    certification: 'Professional Nail Technician Certificate',
    image: 'nails'
  },
  {
    title: 'Beautician Course',
    duration: '4 Months',
    level: 'Beginner to Advanced',
    description: 'Comprehensive beauty training covering makeup, skincare, and nail art. Perfect for aspiring all-round beauty professionals.',
    curriculum: ['Makeup Fundamentals', 'Hair Care', 'Skincare Treatments', 'Nail Care', 'Client Communication'],
    certification: 'Professional Beautician Diploma',
    image: 'beauty'
  },
  {
    title: 'Advanced Bridal Makeup',
    duration: '2 Months',
    level: 'Intermediate to Advanced',
    description: 'Specialize in bridal makeup with advanced techniques. Learn to create stunning bridal looks for different occasions and skin types.',
    curriculum: ['Bridal Makeup Artistry', 'Trial Techniques', 'Product Selection', 'Stain-Resistant Makeup', 'Occasion-Based Styling'],
    certification: 'Advanced Bridal Makeup Specialist',
    image: 'bridal'
  },
  {
    title: 'Short-term Makeup Workshop',
    duration: '1 Month',
    level: 'Beginner',
    description: 'Quick introduction to professional makeup. Perfect for beginners looking to get started in the beauty industry.',
    curriculum: ['Makeup Basics', 'Product Knowledge', 'Face Contouring', 'Makeup Application', 'Portfolio Building'],
    certification: 'Workshop Completion Certificate',
    image: 'workshop'
  },
  {
    title: 'Short-term Hair Styling Workshop',
    duration: '1 Month',
    level: 'Beginner',
    description: 'Gain essential hair styling skills in a condensed format. Learn basic cutting and styling from experienced professionals.',
    curriculum: ['Hair Care Basics', 'Basic Cutting', 'Styling Tips', 'Product Knowledge', 'Safety & Hygiene'],
    certification: 'Workshop Completion Certificate',
    image: 'workshop-hair'
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Our Courses</h1>
          <p className="text-xl text-foreground/60 text-balance">Choose from our industry-designed beauty training programs</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col">
                {/* Course Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles size={48} className="mx-auto text-primary mb-2" />
                    <p className="text-foreground/60">{course.image}</p>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{course.title}</h3>
                  <p className="text-foreground/60 mb-6">{course.description}</p>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-foreground/60">Duration</p>
                        <p className="font-semibold text-foreground">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-foreground/60">Fees</p>
                        <p className="font-semibold text-foreground">{course.fees}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-foreground/60">Level</p>
                        <p className="font-semibold text-foreground text-sm">{course.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-foreground/60">Certificate</p>
                        <p className="font-semibold text-foreground text-sm">Included</p>
                      </div>
                    </div>
                  </div>

                  {/* Curriculum */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Curriculum Highlights</h4>
                    <ul className="space-y-2">
                      {course.curriculum.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/70 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certification */}
                  <div className="bg-secondary/10 rounded-lg p-3 mb-6">
                    <p className="text-sm font-medium text-foreground">Certification: <span className="text-primary">{course.certification}</span></p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-center block"
                    >
                      Enroll in This Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do I need prior experience?',
                a: 'No! Our courses are designed for beginners. We also have advanced courses for experienced professionals looking to specialize.'
              },
              {
                q: 'What is the class size?',
                a: 'We maintain small batch sizes (max 15 students) to ensure personalized attention and hands-on training.'
              },
              {
                q: 'Are the certifications recognized?',
                a: 'Yes, our certifications are recognized by leading salons, spas, and beauty studios across the country.'
              },
              {
                q: 'What about placement assistance?',
                a: 'We provide 100% placement assistance with our network of 50+ partner salons and beauty studios.'
              },
              {
                q: 'Can I do a course trial?',
                a: 'Yes! We offer free demo classes. Contact us to book your demo today.'
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
