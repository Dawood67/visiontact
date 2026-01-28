"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui";
import { heroItem, heroStagger } from "@/app/lib/animations";

export function CTASection() {
  return (
    <section className="relative py-32 bg-[#C75D3A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(15, 14, 12, 0.3) 40px,
              rgba(15, 14, 12, 0.3) 41px
            )`,
          }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-60 -left-60 w-[500px] h-[500px]"
        >
          <div className="absolute inset-0 border-2 border-[#0F0E0C]/20 rounded-full" />
          <div className="absolute inset-8 border border-[#F7F3ED]/20 rounded-full" />
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#0F0E0C]/30 rounded-full -translate-x-1/2" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -right-60 w-[600px] h-[600px]"
        >
          <div className="absolute inset-0 border-2 border-[#F7F3ED]/20 rounded-full" />
          <div className="absolute inset-12 border border-dashed border-[#0F0E0C]/15 rounded-full" />
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-[#F7F3ED]/30 rounded-full -translate-x-1/2" />
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-6 h-6 border-2 border-[#F7F3ED]/30 rotate-45"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[10%] w-4 h-4 bg-[#0F0E0C]/20"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[20%] w-3 h-3 bg-[#F7F3ED]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[25%] w-5 h-5 border border-[#0F0E0C]/25 rounded-full"
        />

        <div className="absolute top-8 left-8">
          <div className="w-20 h-px bg-[#0F0E0C]/30" />
          <div className="w-px h-20 bg-[#0F0E0C]/30" />
          <div className="absolute top-3 left-3 w-2 h-2 bg-[#0F0E0C]/20" />
        </div>
        <div className="absolute top-8 right-8">
          <div className="w-20 h-px bg-[#0F0E0C]/30 ml-auto" />
          <div className="w-px h-20 bg-[#0F0E0C]/30 ml-auto" />
        </div>
        <div className="absolute bottom-8 left-8">
          <div className="w-px h-20 bg-[#F7F3ED]/20" />
          <div className="w-20 h-px bg-[#F7F3ED]/20" />
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="w-px h-20 bg-[#F7F3ED]/20 ml-auto" />
          <div className="w-20 h-px bg-[#F7F3ED]/20" />
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={heroItem}
            className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#0F0E0C]/70 mb-6"
          >
            <span className="w-6 h-px bg-[#0F0E0C]/50" />
            Get Started
            <span className="w-6 h-px bg-[#0F0E0C]/50" />
          </motion.span>

          <motion.h2
            variants={heroItem}
            className="text-4xl md:text-5xl lg:text-6xl text-[#F7F3ED] leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Ready to transform how you hire?
          </motion.h2>

          <motion.p
            variants={heroItem}
            className="text-xl text-[#F7F3ED]/80 mb-10 max-w-xl mx-auto"
          >
            Join thousands of companies building exceptional teams with
            Visiontact. Start your free trial today.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0F0E0C] text-[#F7F3ED] font-medium tracking-wide transition-all duration-300 hover:bg-[#1A1918]"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#F7F3ED] font-medium tracking-wide border-2 border-[#F7F3ED]/40 transition-all duration-300 hover:bg-[#F7F3ED]/10 hover:border-[#F7F3ED]/60"
            >
              Schedule a Demo
            </motion.a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#F7F3ED]/70"
          >
            {[
              "14-day free trial",
              "No credit card required",
              "Cancel anytime",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#F7F3ED]/50 rounded-full" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
