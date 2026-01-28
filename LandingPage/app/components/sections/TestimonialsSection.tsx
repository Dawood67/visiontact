"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "../ui";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

const testimonials = [
  {
    quote:
      "Visiontact transformed our hiring. We went from struggling to fill roles in months to finding perfect candidates in weeks.",
    author: "Sarah Chen",
    role: "VP of People",
    company: "TechFlow",
  },
  {
    quote:
      "The AI matching is remarkably accurate. It surfaces candidates we would have overlooked, and they consistently perform.",
    author: "Michael Roberts",
    role: "Head of Talent",
    company: "ScaleUp Ventures",
  },
  {
    quote:
      "Finally, recruitment software that understands the human element. Our candidate experience scores are at an all-time high.",
    author: "Emily Martinez",
    role: "HR Director",
    company: "Global Solutions",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-[#1A1918] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 93, 58, 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="absolute top-10 left-10 opacity-[0.04]">
          <path
            d="M120 120V180H60C60 146.863 86.8629 120 120 120V60C53.7258 60 0 113.726 0 180V300H120V180M300 120V180H240C240 146.863 266.863 120 300 120V60C233.726 60 180 113.726 180 180V300H300V180"
            fill="#F7F3ED"
          />
        </svg>

        <motion.div
          animate={{ y: [-20, 20, -20], x: [-5, 5, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[15%] w-4 h-4 border border-[#C75D3A]/40 rotate-45"
        />
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[8%] w-5 h-5 border border-[#F7F3ED]/20"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[5%] w-3 h-3 bg-[#C75D3A]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-[#F7F3ED]/25 rounded-full"
        />
        <motion.div
          animate={{ x: [-10, 10, -10], y: [5, -5, 5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[40%] right-[25%] w-3 h-3 border border-[#C75D3A]/25 rounded-full"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-[#C75D3A]/30 to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-[#C75D3A]/30 to-transparent origin-right"
        />
      </div>

      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#F7F3ED]/10 to-transparent" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by talent leaders"
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              variants={fadeUp}
              className="group relative"
            >
              <div className="relative bg-[#0F0E0C]/70 border border-[#F7F3ED]/5 p-8 md:p-10 h-full hover:border-[#C75D3A]/30 transition-all duration-500">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C75D3A]/30 to-transparent" />

                <div className="mb-6">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                    <path
                      d="M12 12V18H6C6 14.6863 8.68629 12 12 12V6C5.37258 6 0 11.3726 0 18V24H12V18M32 12V18H26C26 14.6863 28.6863 12 32 12V6C25.3726 6 20 11.3726 20 18V24H32V18"
                      fill="#C75D3A"
                      fillOpacity="0.4"
                    />
                  </svg>
                </div>

                <p className="text-lg text-[#C4BEB4] leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <footer className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#252321] border border-[#F7F3ED]/10 flex items-center justify-center text-[#C75D3A] text-sm font-medium">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#C75D3A]/20 border border-[#C75D3A]/40" />
                  </div>
                  <div>
                    <cite
                      className="not-italic text-[#F7F3ED] block"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {testimonial.author}
                    </cite>
                    <span className="text-sm text-[#8A847A]">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                </footer>

                <div className="absolute bottom-4 right-4 text-xs text-[#8A847A]/30">
                  0{index + 1}
                </div>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-12 border-t border-[#F7F3ED]/5"
        >
          <p className="text-center text-sm text-[#8A847A] mb-8 uppercase tracking-widest">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {["TechFlow", "ScaleUp", "GlobalCorp", "InnovateCo", "FutureTech"].map(
              (company, index) => (
                <motion.span
                  key={company}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-xl text-[#8A847A]/40 hover:text-[#8A847A]/60 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {company}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
