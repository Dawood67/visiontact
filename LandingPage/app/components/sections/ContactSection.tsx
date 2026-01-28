"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Container, Button } from "../ui";
import { fadeUp, staggerContainer, slideInRight } from "@/app/lib/animations";
import { COMPANY } from "@/app/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-[#0F0E0C] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 93, 58, 0.12) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          className="absolute -left-20 bottom-20 text-[25rem] font-bold text-[#C75D3A]/[0.03] leading-none select-none"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          ?
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-[300px] h-[300px]"
        >
          <div className="absolute inset-0 border border-[#C75D3A]/15 rounded-full" />
          <div className="absolute inset-6 border border-dashed border-[#F7F3ED]/10 rounded-full" />
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#C75D3A]/40 rounded-full -translate-x-1/2" />
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], x: [5, -5, 5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[5%] w-4 h-4 border border-[#C75D3A]/40 rotate-45"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] right-[8%] w-3 h-3 bg-[#C75D3A]/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[15%] w-2 h-2 bg-[#F7F3ED]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[30%] w-5 h-5 border border-[#F7F3ED]/15"
        />

        <div className="absolute top-0 left-[30%] w-px h-40 bg-gradient-to-b from-[#C75D3A]/30 to-transparent" />
        <div className="absolute bottom-0 right-[30%] w-px h-40 bg-gradient-to-t from-[#C75D3A]/30 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-[#F7F3ED]/10 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#C75D3A] mb-4"
            >
              <span className="w-8 h-px bg-[#C75D3A]" />
              Contact
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl text-[#F7F3ED] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Let&apos;s start a<br />
              <span className="italic text-[#C75D3A]">conversation</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#C4BEB4] mb-12 max-w-md"
            >
              Ready to revolutionize your hiring? Our team is here to help you
              find the perfect solution.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-6">
              <a
                href={`tel:${COMPANY.phone}`}
                className="group flex items-center gap-4"
              >
                <div className="w-12 h-12 border border-[#F7F3ED]/10 flex items-center justify-center group-hover:border-[#C75D3A]/50 group-hover:bg-[#C75D3A]/5 transition-all duration-300">
                  <Phone className="w-5 h-5 text-[#C75D3A]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#8A847A] uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <p className="text-[#F7F3ED] group-hover:text-[#C75D3A] transition-colors">
                    {COMPANY.phone}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A847A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-4"
              >
                <div className="w-12 h-12 border border-[#F7F3ED]/10 flex items-center justify-center group-hover:border-[#C75D3A]/50 group-hover:bg-[#C75D3A]/5 transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#C75D3A]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#8A847A] uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="text-[#F7F3ED] group-hover:text-[#C75D3A] transition-colors">
                    {COMPANY.email}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A847A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="pt-6 border-t border-[#F7F3ED]/5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 border border-[#F7F3ED]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C75D3A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A847A] uppercase tracking-wider mb-0.5">
                      Houston (HQ)
                    </p>
                    <p className="text-[#C4BEB4] text-sm">
                      {COMPANY.addresses.houston.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-[#F7F3ED]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C75D3A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A847A] uppercase tracking-wider mb-0.5">
                      Dubai
                    </p>
                    <p className="text-[#C4BEB4] text-sm">
                      {COMPANY.addresses.dubai.full}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative bg-[#1A1918] border border-[#F7F3ED]/5 p-8 md:p-10">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C75D3A]/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C75D3A]/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C75D3A]/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C75D3A]/50" />

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs text-[#8A847A] uppercase tracking-wider mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3.5 bg-[#0F0E0C] border border-[#F7F3ED]/10 text-[#F7F3ED] placeholder-[#8A847A]/50 focus:outline-none focus:border-[#C75D3A]/50 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs text-[#8A847A] uppercase tracking-wider mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3.5 bg-[#0F0E0C] border border-[#F7F3ED]/10 text-[#F7F3ED] placeholder-[#8A847A]/50 focus:outline-none focus:border-[#C75D3A]/50 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#8A847A] uppercase tracking-wider mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3.5 bg-[#0F0E0C] border border-[#F7F3ED]/10 text-[#F7F3ED] placeholder-[#8A847A]/50 focus:outline-none focus:border-[#C75D3A]/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs text-[#8A847A] uppercase tracking-wider mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3.5 bg-[#0F0E0C] border border-[#F7F3ED]/10 text-[#F7F3ED] placeholder-[#8A847A]/50 focus:outline-none focus:border-[#C75D3A]/50 transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-[#8A847A] uppercase tracking-wider mb-2"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3.5 bg-[#0F0E0C] border border-[#F7F3ED]/10 text-[#F7F3ED] placeholder-[#8A847A]/50 focus:outline-none focus:border-[#C75D3A]/50 transition-colors resize-none"
                    placeholder="Tell us about your hiring needs..."
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-xs text-[#8A847A] text-center">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-[#C75D3A] hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
