'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'

const galleryItems = [
  { category: 'Makeup', title: 'Bridal Makeup Look', description: 'Traditional bridal makeup with gold accents' },
  { category: 'Hair', title: 'Bridal Hair Design', description: 'Elegant braided updo with flowers' },
  { category: 'Makeup', title: 'Party Makeup', description: 'Glamorous evening makeup look' },
  { category: 'Skincare', title: 'Facial Treatment', description: 'Professional skincare session in progress' },
  { category: 'Nails', title: 'Nail Art Design', description: 'Intricate bridal nail art' },
  { category: 'Training', title: 'Classroom Training', description: 'Hands-on training with students' },
  { category: 'Makeup', title: 'Contouring Techniques', description: 'Advanced face contouring lesson' },
  { category: 'Hair', title: 'Hair Coloring', description: 'Professional hair coloring service' },
  { category: 'Skincare', title: 'Spa Treatment', description: 'Relaxing spa therapy session' },
  { category: 'Training', title: 'Practice Sessions', description: 'Students practicing makeup application' },
  { category: 'Makeup', title: 'Before & After', description: 'Stunning makeup transformation' },
  { category: 'Nails', title: 'Nail Extensions', description: 'Professional gel nail extensions' },
]

const categories = ['All', 'Makeup', 'Hair', 'Skincare', 'Nails', 'Training']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Our Gallery</h1>
          <p className="text-xl text-foreground/60 text-balance">Explore our student work, training sessions, and transformations</p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-background sticky top-16 border-b border-border z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Image Area */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative">
                  <Sparkles size={48} className="text-primary opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-end p-6 text-primary-foreground">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Be Part of Our Success Stories</h2>
          <p className="text-primary-foreground/90 mb-8 text-balance">
            Your transformation could be featured in our gallery. Join hundreds of students who've achieved their beauty career dreams.
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
