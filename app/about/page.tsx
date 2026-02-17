'use client'

import { Navigation } from '@/components/navigation'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Target, Users } from 'lucide-react'

import OurStoryImage from '@/public/our-story-image.jpeg'
import WhyChooseBg from '@/public/why-choose-ira-bg.jpg'
import OurStoryBg from '@/public/our-story2-bg.jpeg'

const achievements = [
  { number: '100%', label: 'Placement Rate' },
  { number: '5 Years', label: 'Industry Experience' },
  { number: '50+', label: 'Partner Salons' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#FFF9F8] via-[#FFEDE0] to-[#E4CEFF] py-14 sm:py-20 md:min-h-[360px] flex items-center">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Heading */}
    <h1 className="
      mx-auto
      max-w-[22ch]
      sm:max-w-[28ch]
      text-3xl
      sm:text-5xl
      md:text-6xl
      font-bold
      text-primary
      leading-tight
      tracking-tight
      break-words
    ">
      About IRA Beauty Academy
    </h1>

    {/* Subtitle */}
    <p className="
      mt-4
      mx-auto
      text-base
      sm:text-lg
      md:text-xl
      text-black/80
      leading-relaxed
    ">
      Transforming dreams into professional beauty careers since 2020
    </p>

  </div>
</section>

      {/* Story Section */}
      <section className="relative isolate py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={OurStoryBg} alt="Background" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ smaller padding on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center bg-white/60 backdrop-blur-md rounded-3xl p-5 sm:p-8 lg:p-10">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-10">
                Our Story
              </h2>

              <p className="text-black mb-3 leading-relaxed">
                IRA Academy was founded by <b>Rekha Sandeep</b> and <b>Swathi Vaghmare</b> with a vision
                to empower aspiring beauty professionals with real skills, confidence, and career growth.
              </p>

              <p className="text-black mb-3 leading-relaxed">
                With 16+ years of expertise in advanced skin and aesthetic training, <b>Rekha Sandeep</b>{' '}
                has trained 1000+ professionals and worked with leading beauty brands.
              </p>

              <p className="text-black mb-3 leading-relaxed">
                <b>Swathi Vaghmare</b>, a Certified Beauty Trainer with 10+ years of experience, has
                trained 500+ students and conducted multiple professional workshops, specializing in
                makeup artistry and cosmetology.
              </p>

              <p className="text-black mb-3 leading-relaxed">
                Together, they built IRA Academy as a platform that focuses on practical training,
                industry standards, and transforming passion into successful beauty careers.
              </p>

              <p className="text-black leading-relaxed">At IRA Academy, we don’t just teach beauty — we build professionals.</p>
            </div>

            {/* ✅ responsive height */}
            <div className="relative h-[18rem] sm:h-[22rem] lg:h-[29rem] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-yellow-700">
              <Image
                src={OurStoryImage}
                alt="Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-20 bg-[linear-gradient(53deg,#F472B6_11.33%,rgba(244,114,182,0.41)_88.25%,rgba(244,114,182,0)_100.21%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To empower individuals with industry-standard beauty education and training, enabling them to build successful,
                fulfilling careers in the beauty and wellness industry.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                <Users className="text-foreground" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the most trusted and innovative beauty academy in the region, known for excellence in training, student success,
                and positive impact on the beauty industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">Our Achievements</h2>
          </div>

          {/* ✅ 1 col on very small, 2 on mobile, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-card rounded-2xl p-6 sm:p-8 border border-border">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{achievement.number}</p>
                <p className="text-foreground/60">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative isolate py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={WhyChooseBg} alt="Why Choose background" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-10 sm:mb-12 text-center drop-shadow-lg">
            Why Choose IRA Beauty Academy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: 'Industry Experts', description: 'Learn from professionals with years of real-world experience' },
              { title: 'Modern Facilities', description: 'State-of-the-art training studios with latest equipment' },
              { title: 'Comprehensive Curriculum', description: 'Industry-relevant courses designed by professionals' },
              { title: 'Hands-on Training', description: 'Practice on real models with personalized feedback' },
              { title: 'Certification', description: 'Recognized certifications valued by employers' },
              { title: 'Career Support', description: 'Job placement assistance and career guidance' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/40 shadow-xl"
              >
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}