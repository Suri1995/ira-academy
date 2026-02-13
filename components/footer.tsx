import Link from "next/link"
import { Facebook, Instagram, Youtube, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
<footer className="text-background bg-[linear-gradient(180deg,#1c1c1c,#242424,#1a1a1a)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              IRA Beauty Academy
            </div>
            <p className="mt-3 text-sm leading-relaxed opacity-85 max-w-sm">
              Transforming passion into professional beauty careers since 2025.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold tracking-wide uppercase opacity-90 text-center">
              Quick Links
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { label: "Courses", href: "/courses" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Success Stories", href: "/success-stories" },
              ].map((item) => (
                <div key={item.href} className="text-center">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 opacity-85 hover:opacity-100 hover:text-primary transition"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold tracking-wide uppercase opacity-90">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="tel:+919876543210"
                className="block opacity-85 hover:opacity-100 hover:text-primary transition"
              >
                +91 9876 543 210 / +91 8142766813
              </a>

              <a
                href="mailto:info@irabeautyacademy.com"
                className="block opacity-85 hover:opacity-100 hover:text-primary transition"
              >
                info@irabeautyacademy.com
              </a>

              <p className="opacity-75">
                Chaitanyapuri, Hyderabad, Telangana, India
              </p>
              <a href="/privacy-policy" className="block opacity-85 hover:opacity-100 hover:text-primary transition">
              Privacy Policy
            </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm opacity-80">
            © {currentYear} IRA Beauty Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}