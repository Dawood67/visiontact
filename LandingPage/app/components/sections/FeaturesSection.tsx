"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  BarChart3,
  Calendar,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { Container } from "../ui";
import { fadeUp, staggerContainer } from "@/app/lib/animations";
import { FEATURES } from "@/app/lib/constants";

const iconMap = {
  "candidate-matching": Users,
  "resume-parsing": FileText,
  shortlisting: BarChart3,
  scheduling: Calendar,
  analytics: TrendingUp,
  engagement: MessageSquare,
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-[#0F0E0C] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F7F3ED]/10 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-px bg-[#C75D3A]/50" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 93, 58, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px]"
        >
          <div className="absolute inset-0 border border-[#C75D3A]/20 rounded-full" />
          <div className="absolute inset-8 border border-[#F7F3ED]/10 rounded-full" />
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#C75D3A]/40 rounded-full -translate-x-1/2" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -left-60 w-[600px] h-[600px]"
        >
          <div className="absolute inset-0 border border-[#C75D3A]/15 rounded-full" />
          <div className="absolute inset-12 border border-dashed border-[#F7F3ED]/10 rounded-full" />
        </motion.div>

        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[20%] w-4 h-4 border-2 border-[#C75D3A]/40 rotate-45"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[10%] w-3 h-3 bg-[#C75D3A]/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-[15%] w-2 h-2 bg-[#F7F3ED]/30 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-8 md:left-16"
      >
        <div className="w-px h-40 bg-gradient-to-b from-[#C75D3A]/60 to-transparent" />
        <div className="absolute top-0 left-0 w-10 h-px bg-[#C75D3A]/60" />
        <div className="absolute top-2 left-2 w-2 h-2 bg-[#C75D3A]/40" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 right-8 md:right-16"
      >
        <div className="w-px h-40 bg-gradient-to-b from-[#C75D3A]/60 to-transparent" />
        <div className="absolute top-0 right-0 w-10 h-px bg-[#C75D3A]/60" />
        <div className="absolute top-2 right-2 w-2 h-2 bg-[#C75D3A]/40" />
      </motion.div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#C75D3A] mb-4"
            >
              <span className="w-8 h-px bg-[#C75D3A]" />
              Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl text-[#F7F3ED] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Everything you need to hire brilliantly
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#C4BEB4] max-w-md mt-6 lg:mt-0 lg:text-right"
          >
            Six powerful tools working in harmony to transform your talent acquisition.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.id as keyof typeof iconMap];
            return (
              <motion.article
                key={feature.id}
                variants={fadeUp}
                className="group relative bg-[#1A1918]/50 border border-[#F7F3ED]/5 p-8 md:p-10 hover:bg-[#1A1918] hover:border-[#C75D3A]/30 transition-all duration-500"
              >
                <span className="absolute top-6 right-6 text-xs text-[#8A847A] tracking-widest">
                  {feature.number}
                </span>

                <div className="relative mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#C75D3A]/10 border border-[#C75D3A]/20 group-hover:bg-[#C75D3A]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#C75D3A]" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#C75D3A]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3
                  className="text-xl text-[#F7F3ED] mb-2 group-hover:text-[#C75D3A] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {feature.title}
                </h3>

                <p className="text-sm text-[#C75D3A]/70 mb-4">
                  {feature.subtitle}
                </p>

                <p className="text-[#C4BEB4] text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#C75D3A] group-hover:w-full transition-all duration-500" />

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="#C75D3A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
