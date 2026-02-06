import Link from 'next/link'
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IRA</span>
              </div>
              <span className="font-bold text-lg">IRA Beauty Academy</span>
            </div>
            <p className="text-sm opacity-80">
              Transforming passion into professional beauty careers since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 9876 543 210
                </a>
              </li>
              <li>
                <a href="mailto:info@irabeautyacademy.com" className="hover:text-primary transition-colors">
                  info@irabeautyacademy.com
                </a>
              </li>
              <li className="text-sm opacity-80">
                New Delhi, India
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © {currentYear} IRA Beauty Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
