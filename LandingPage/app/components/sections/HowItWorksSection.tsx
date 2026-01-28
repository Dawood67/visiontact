"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "../ui";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Import your job descriptions and integrate with your existing tools. Setup takes minutes, not days.",
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Our AI scans, parses, and evaluates candidates against your unique requirements and company culture.",
  },
  {
    number: "03",
    title: "Engage",
    description:
      "Automated outreach and scheduling keeps candidates warm while your team focuses on high-value conversations.",
  },
  {
    number: "04",
    title: "Hire",
    description:
      "Make confident decisions backed by data. Watch your team grow with people who truly fit.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="process" className="relative py-32 bg-[#1A1918] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 93, 58, 0.12) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40rem] font-bold text-[#F7F3ED]/[0.02] leading-none select-none"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          4
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <motion.line
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            stroke="#C75D3A"
            strokeWidth="1"
            strokeOpacity="0.15"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.line
            x1="20%"
            y1="100%"
            x2="100%"
            y2="20%"
            stroke="#F7F3ED"
            strokeWidth="1"
            strokeOpacity="0.05"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
          />
        </svg>

        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-5 h-5 border border-[#C75D3A]/30"
        />
        <motion.div
          animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[8%] w-3 h-3 bg-[#C75D3A]/25 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[15%] w-4 h-4 border border-[#F7F3ED]/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[40%] right-[20%] w-2 h-2 bg-[#F7F3ED]/20"
        />

        <div className="absolute top-12 right-12">
          <div className="w-20 h-px bg-gradient-to-l from-[#C75D3A]/40 to-transparent" />
          <div className="absolute right-0 top-0 w-px h-20 bg-gradient-to-b from-[#C75D3A]/40 to-transparent" />
        </div>
        <div className="absolute bottom-12 left-12">
          <div className="w-20 h-px bg-gradient-to-r from-[#C75D3A]/40 to-transparent" />
          <div className="absolute left-0 bottom-0 w-px h-20 bg-gradient-to-t from-[#C75D3A]/40 to-transparent" />
        </div>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Process"
          title="From posting to hiring, simplified"
          description="A streamlined workflow that eliminates friction and accelerates your path to the perfect hire."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px">
            <div className="h-full bg-gradient-to-b from-[#C75D3A]/50 via-[#F7F3ED]/20 to-[#C75D3A]/50" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className={`relative flex items-start gap-8 lg:gap-0 mb-20 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20"
                }`}
              >
                <div className="relative bg-[#0F0E0C]/50 border border-[#F7F3ED]/5 p-8 group hover:border-[#C75D3A]/30 transition-colors duration-300">
                  <span
                    className={`absolute top-4 ${index % 2 === 0 ? "lg:left-4 right-4 lg:right-auto" : "right-4"} text-6xl text-[#C75D3A]/10`}
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {step.number}
                  </span>

                  <div className="relative">
                    <h3
                      className="text-2xl text-[#F7F3ED] mb-3 group-hover:text-[#C75D3A] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#C4BEB4] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-0 ${index % 2 === 0 ? "lg:left-0 right-0 lg:right-auto" : "right-0"} w-12 h-px bg-[#C75D3A]/50`}
                  />
                </div>
              </div>

              <div className="relative z-10 flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-[#0F0E0C] border border-[#C75D3A]/50 flex items-center justify-center"
                >
                  <span
                    className="text-lg text-[#C75D3A]"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {step.number}
                  </span>
                </motion.div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#C75D3A]" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#C75D3A]/50" />
              </div>

              <div className="hidden lg:block flex-1 lg:w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
