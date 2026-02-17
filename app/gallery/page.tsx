'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import BridalMakeup from '@/public/bridal-makeup-look.jpg'
import BridalHair from '@/public/bridal-hair-look.jpg'
import FaceTreatment from '@/public/face-treatment.jpg'
import NailArt from '@/public/nail-art.jpg'
import ClassroomTraining from '@/public/classroom-training.jpg'
import CTAImage from '@/public/cta-image.webp'

const galleryItems = [
  {
    category: 'Makeup',
    title: 'Bridal Makeup Look',
    description: 'Traditional bridal makeup with gold accents',
    image: BridalMakeup,
  },
  {
    category: 'Hair',
    title: 'Bridal Hair Design',
    description: 'Elegant braided updo with flowers',
    image: BridalHair,
  },
  {
    category: 'Skincare',
    title: 'Facial Treatment',
    description: 'Professional skincare session in progress',
    image: FaceTreatment,
  },
  {
    category: 'Nails',
    title: 'Nail Art Design',
    description: 'Intricate bridal nail art',
    image: NailArt,
  },
  {
    category: 'Training',
    title: 'Classroom Training',
    description: 'Hands-on training with students',
    image: ClassroomTraining,
  },
]

const categories = ['All', 'Makeup', 'Hair', 'Skincare', 'Nails', 'Training']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero (fixed mobile overflow) */}
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
                Our Gallery
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
                Explore our student work, training sessions, and transformations
              </TextSplit>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
<section className="sticky top-[64px] z-40 bg-background/95 backdrop-blur border-b border-border">
  <div className="max-w-7xl mx-auto px-4 py-6">
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

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
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

      {/* CTA */}
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
    // ✅ critical fix: flex-wrap + max-w-full prevents mobile overflow
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