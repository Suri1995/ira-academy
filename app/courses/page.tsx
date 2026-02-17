"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Transition } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Clock, Award, BookOpen, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProfessionalMakeup from "@/public/professional-makeup-training.jpg";
import SkinCare from "@/public/cosmotology-skincare.jpg";
import HairStyle from "@/public/hairstyling-hairdressing.jpg";
import NailStylist from "@/public/nail-stylist.jpg";
import BeauticianCourse from "@/public/beautician-course.jpg";
import MakeupArtist from "@/public/makeup-artist.jpg";

/* ----------------------------- BlurText (same file) ----------------------------- */
const buildKeyframes = (from: Record<string, any>, steps: Record<string, any>[]) => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, any[]> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });

  return keyframes;
};

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  easing?: Transition["ease"];
  onAnimationComplete?: () => void;
  stepDuration?: number;
  loop?: boolean;
  loopDelay?: number; // ms
}

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOut",
  onAnimationComplete,
  stepDuration = 0.35,
  loop = false,
  loopDelay = 5000,
}: BlurTextProps) => {
  const elements = useMemo(() => {
    if (animateBy === "words") return text.split(" ");
    return text.split("");
  }, [text, animateBy]);

  const [inView, setInView] = useState(false);
  const [cycle, setCycle] = useState(0);

  const ref = useRef<HTMLParagraphElement>(null);
  const loopTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    return () => {
      if (loopTimerRef.current) window.clearTimeout(loopTimerRef.current);
    };
  }, []);

  const defaultFrom = useMemo(() => {
    return direction === "top"
      ? { filter: "blur(10px)", opacity: 0, y: -50 }
      : { filter: "blur(10px)", opacity: 0, y: 50 };
  }, [direction]);

  const defaultTo = useMemo(() => {
    return [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
      },
    ];
  }, [direction]);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = Array.isArray(animationTo) ? animationTo : defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount <= 1 ? 0 : i / (stepCount - 1)
  );

  const handleLastComplete = () => {
    onAnimationComplete?.();

    if (!loop) return;

    if (loopTimerRef.current) window.clearTimeout(loopTimerRef.current);

    loopTimerRef.current = window.setTimeout(() => {
      setCycle((c) => c + 1);
    }, loopDelay);
  };

  return (
    <p
      ref={ref}
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        columnGap: animateBy === "words" ? "0.22em" : "0em",
        rowGap: "0.12em",
      }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: inView ? (index * delay) / 1000 : 0,
          ease: easing,
        };

        const isLast = index === elements.length - 1;

        return (
          <motion.span
            key={`${cycle}-${index}`}
            className="inline-block will-change-[transform,filter,opacity]"
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={isLast && inView ? handleLastComplete : undefined}
          >
            {segment === " " ? "\u00A0" : segment}
          </motion.span>
        );
      })}
    </p>
  );
};
/* ------------------------------------------------------------------------------ */

const courses = [
  {
    title: "Professional Makeup Course",
    duration: "3 Months",
    level: "Beginner to Advanced",
    description:
      "Master the art of makeup with our comprehensive professional course. Learn bridal makeup, party makeup, and everyday makeup techniques.",
    curriculum: [
      "Face Mapping & Contouring",
      "Bridal Makeup Techniques",
      "Party & Event Makeup",
      "Corrective Makeup",
      "Color Theory",
    ],
    certification: "Recognized Professional Makeup Artist Certificate",
    image: ProfessionalMakeup,
  },
  {
    title: "Skin & Cosmetology",
    duration: "3 Months",
    level: "Beginner to Advanced",
    description:
      "Learn comprehensive skincare and cosmetology treatments. Master facial techniques and skincare product knowledge.",
    curriculum: [
      "Skin Biology & Anatomy",
      "Facial Treatments",
      "Chemical Peels",
      "Threading & Waxing",
      "Anti-Aging Techniques",
    ],
    certification: "Professional Cosmetologist Certificate",
    image: SkinCare,
  },
  {
    title: "Hair Styling & Hair Dressing",
    duration: "2.5 Months",
    level: "Beginner to Intermediate",
    description:
      "Become an expert in hair styling and design. Learn cutting, coloring, and styling techniques from industry professionals.",
    curriculum: [
      "Hair Basics & Health",
      "Hair Cutting Techniques",
      "Hair Coloring & Trends",
      "Styling Techniques",
      "Chemical Treatments",
    ],
    certification: "Professional Hair Stylist Certification",
    image: HairStyle,
  },
  {
    title: "Nail Art & Extensions",
    duration: "1.5 Months",
    level: "Beginner to Intermediate",
    description:
      "Master nail art and extension techniques. Learn to create stunning nail designs and apply various extension methods.",
    curriculum: [
      "Nail Anatomy",
      "Basic Nail Art",
      "Advanced Designs",
      "Gel Extensions",
      "Acrylic Application",
    ],
    certification: "Professional Nail Technician Certificate",
    image: NailStylist,
  },
  {
    title: "Beautician Course",
    duration: "4 Months",
    level: "Beginner to Advanced",
    description:
      "Comprehensive beauty training covering makeup, skincare, and nail art. Perfect for aspiring all-round beauty professionals.",
    curriculum: [
      "Makeup Fundamentals",
      "Hair Care",
      "Skincare Treatments",
      "Nail Care",
      "Client Communication",
    ],
    certification: "Professional Beautician Diploma",
    image: BeauticianCourse,
  },
  {
    title: "Advanced Bridal Makeup",
    duration: "2 Months",
    level: "Intermediate to Advanced",
    description:
      "Specialize in bridal makeup with advanced techniques. Learn to create stunning bridal looks for different occasions and skin types.",
    curriculum: [
      "Bridal Makeup Artistry",
      "Trial Techniques",
      "Product Selection",
      "Stain-Resistant Makeup",
      "Occasion-Based Styling",
    ],
    certification: "Advanced Bridal Makeup Specialist",
    image: MakeupArtist,
  },
];

export default function CoursesPage() {
  const stats = useMemo(
    () => [
      { label: "Placement Support", value: "100%", icon: Sparkles },
      { label: "Courses", value: `${courses.length}+`, icon: BookOpen },
    ],
    []
  );

  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff1f2,#fda4af,#fb7185)]">
        <div className="absolute inset-0 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground/70 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                Hands-on training
              </div>

              <h1>
                <BlurText
                  text="Our Courses"
                  delay={70}
                  animateBy="words"
                  direction="bottom"
                  easing="easeOut"
                  loop
                  loopDelay={3000}
                  className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#a3790f] leading-tight"
                />
              </h1>

              <BlurText
                text="Choose from our industry-designed beauty training programs"
                delay={70}
                animateBy="words"
                direction="bottom"
                easing="easeOut"
                loop
                loopDelay={5000}
                className="mt-4 text-lg sm:text-xl text-foreground/70 max-w-xl"
              />

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  type="button"
                  onClick={scrollToCourses}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition"
                >
                  Explore Courses
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background/70 px-6 py-3 font-semibold text-foreground hover:bg-background transition"
                >
                  Book Free Demo Class
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl border border-border bg-background/70 backdrop-blur p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-black/60">{s.label}</p>
                          <p className="text-sm font-semibold text-black">{s.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-3xl border border-border bg-background/75 backdrop-blur p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">What you’ll get</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Skill-first curriculum, live practice, and certification — built for salon-ready careers.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  {[
                    { title: "Hands-on practice", desc: "Daily guided practice with trainer feedback." },
                    { title: "Certification included", desc: "Recognized certificates for each program." },
                    { title: "Placement assistance", desc: "Support through our salon/studio network." },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-border bg-card p-4">
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-secondary/10 p-4">
                  <p className="text-sm text-foreground/70">Want help choosing the right course?</p>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition"
                  >
                    Talk to a Counselor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20 bg-background scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative w-full aspect-[16/8] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-bold leading-tight">
                    {course.title}
                  </h3>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-foreground/60 mb-3">{course.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3 pb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-foreground/60">Duration</p>
                        <p className="font-semibold text-foreground">{course.duration}</p>
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

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-3">Curriculum Highlights</h4>
                    <ul className="flex flex-wrap gap-x-8 gap-y-3">
                      {course.curriculum.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-foreground/70 text-sm flex-[0_1_220px]"
                        >
                          <span className="text-primary text-base leading-none">•</span>
                          <span className="leading-snug break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-foreground">
                      Certification: <span className="text-primary">{course.certification}</span>
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity text-center block"
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

      {/* ✅ UPDATED FAQ (Dropdown / Accordion) */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-2 sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Do I need prior experience?",
                  a: "No! Our courses are designed for beginners. We also have advanced courses for experienced professionals looking to specialize.",
                },
                {
                  q: "What is the class size?",
                  a: "We maintain small batch sizes (max 15 students) to ensure personalized attention and hands-on training.",
                },
                {
                  q: "Are the certifications recognized?",
                  a: "Yes, our certifications are recognized by leading salons, spas, and beauty studios across the country.",
                },
                {
                  q: "What about placement assistance?",
                  a: "We provide 100% placement assistance with our network of 50+ partner salons and beauty studios.",
                },
                {
                  q: "Can I do a course trial?",
                  a: "Yes! We offer free demo classes. Contact us to book your demo today.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-border last:border-b-0"
                >
                  <AccordionTrigger className="px-3 sm:px-4 py-4 text-left font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-3 sm:px-4 pb-4 text-foreground/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}