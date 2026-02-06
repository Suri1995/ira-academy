'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Award, Target, Users, Sparkles } from 'lucide-react'

const team = [
  { name: 'Riya Sharma', role: 'Founder & Lead Trainer', specialty: 'Professional Makeup' },
  { name: 'Priyanka Verma', role: 'Hair Training Head', specialty: 'Advanced Hair Design' },
  { name: 'Aisha Khan', role: 'Cosmetology Expert', specialty: 'Skin & Beauty' },
  { name: 'Neha Desai', role: 'Placement Officer', specialty: 'Career Development' },
]

const achievements = [
  { number: '2000+', label: 'Students Trained' },
  { number: '100%', label: 'Placement Rate' },
  { number: '5 Years', label: 'Industry Experience' },
  { number: '50+', label: 'Partner Salons' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">About IRA Beauty Academy</h1>
          <p className="text-xl text-foreground/60 text-balance">Transforming dreams into professional beauty careers since 2020</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                IRA Beauty Academy was founded with a simple vision: to provide world-class beauty education to aspiring professionals. What started as a small training center has grown into a premier institute recognized across the industry.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We believe that everyone has the potential to excel in the beauty industry. With our experienced trainers, modern facilities, and comprehensive curriculum, we're committed to nurturing that potential into thriving careers.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, hundreds of our alumni work as successful professionals in leading salons, spas, and beauty studios worldwide.
              </p>
            </div>
            <div className="h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Sparkles size={100} className="text-primary opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To empower individuals with industry-standard beauty education and training, enabling them to build successful, fulfilling careers in the beauty and wellness industry.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                <Users className="text-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the most trusted and innovative beauty academy in the region, known for excellence in training, student success, and positive impact on the beauty industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-card rounded-2xl p-8 border border-border">
                <p className="text-4xl font-bold text-primary mb-2">{achievement.number}</p>
                <p className="text-foreground/60">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-foreground/60 text-balance">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border text-center">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Award className="text-primary opacity-50" size={48} />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-foreground/60 text-xs">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Why Choose IRA Beauty Academy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Industry Experts', description: 'Learn from professionals with years of real-world experience' },
              { title: 'Modern Facilities', description: 'State-of-the-art training studios with latest equipment' },
              { title: 'Comprehensive Curriculum', description: 'Industry-relevant courses designed by professionals' },
              { title: 'Hands-on Training', description: 'Practice on real models with personalized feedback' },
              { title: 'Certification', description: 'Recognized certifications valued by employers' },
              { title: 'Career Support', description: 'Job placement assistance and career guidance' },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-3 text-lg">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
