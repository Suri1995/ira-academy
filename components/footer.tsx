import Link from "next/link"
import { Facebook, Instagram, Youtube, ChevronDown } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-background bg-[linear-gradient(180deg,#1c1c1c,#242424,#1a1a1a)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ✅ Desktop: 3 columns | Mobile: stacked */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Brand */}
          <div className="lg:w-1/3">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              IRA Beauty Academy
            </div>
            <p className="mt-3 text-sm leading-relaxed opacity-85 max-w-sm">
              Transforming passion into professional beauty careers since 2025.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1KzDHWheJ5/"
                target="_blank"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ira.beauty.academy/"
                target="_blank"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@IRABeautyAcademy"
                target="_blank"
                aria-label="YouTube"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* ✅ Desktop Quick Links (unchanged) */}
          <div className="hidden lg:block lg:w-1/3">
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

          {/* ✅ Desktop Contact (unchanged) */}
          <div className="hidden lg:block lg:w-1/3">
            <h3 className="text-lg font-semibold tracking-wide uppercase opacity-90">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="tel:+919876543210"
                className="block opacity-85 hover:opacity-100 hover:text-primary transition"
              >
+918367771295 / 9441681783
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

              <a
                href="/privacy-policy"
                className="block opacity-85 hover:opacity-100 hover:text-primary transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* ✅ Mobile dropdowns like screenshot */}
          <div className="lg:hidden space-y-3">
            {/* Quick Links dropdown */}
            <details className="group border-b border-background/15 pb-3">
              <summary className="flex cursor-pointer items-center justify-between py-2 text-base font-semibold">
                Quick Links
                <ChevronDown className="h-5 w-5 opacity-80 transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-2 space-y-3 text-sm">
                {[
                  { label: "Courses", href: "/courses" },
                  { label: "About Us", href: "/about" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Success Stories", href: "/success-stories" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block opacity-85 hover:opacity-100 hover:text-primary transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            {/* Contact dropdown */}
            <details className="group border-b border-background/15 pb-3">
              <summary className="flex cursor-pointer items-center justify-between py-2 text-base font-semibold">
                Contact
                <ChevronDown className="h-5 w-5 opacity-80 transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-2 space-y-3 text-sm">
                <a
                  href="tel:+919876543210"
                  className="block opacity-85 hover:opacity-100 hover:text-primary transition"
                >
                  
+918367771295 / 9441681783
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

                <a
                  href="/privacy-policy"
                  className="block opacity-85 hover:opacity-100 hover:text-primary transition"
                >
                  Privacy Policy
                </a>
              </div>
            </details>
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