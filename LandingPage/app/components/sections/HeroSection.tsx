"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container, Button } from "../ui";
import { heroStagger, heroItem } from "@/app/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0F0E0C] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#1A1918] rounded-full opacity-60 blur-[100px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 93, 58, 0.2) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-1/2 right-[-15%] -translate-y-1/2"
        >
          <motion.svg
            width="700"
            height="700"
            viewBox="0 0 700 700"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="350"
              cy="350"
              r="300"
              stroke="url(#heroGradient1)"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle
              cx="350"
              cy="350"
              r="240"
              stroke="#C75D3A"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="8 12"
            />
            <circle
              cx="350"
              cy="350"
              r="180"
              stroke="#F7F3ED"
              strokeWidth="1"
              opacity="0.15"
            />
            <circle cx="350" cy="50" r="6" fill="#C75D3A" opacity="0.9" />
            <circle cx="650" cy="350" r="5" fill="#C75D3A" opacity="0.7" />
            <circle cx="350" cy="590" r="7" fill="#C75D3A" opacity="0.5" />
            <circle cx="110" cy="350" r="4" fill="#F7F3ED" opacity="0.5" />
            <defs>
              <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C75D3A" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#F7F3ED" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#C75D3A" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>

        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[18%] w-4 h-4 border-2 border-[#C75D3A]/60 rotate-45"
        />
        <motion.div
          animate={{
            y: [15, -15, 15],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[55%] right-[28%] w-3 h-3 bg-[#C75D3A]/50 rounded-full"
        />
        <motion.div
          animate={{
            y: [-10, 20, -10],
            x: [-5, 5, -5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[12%] w-5 h-5 border border-[#F7F3ED]/30 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[70%] right-[15%] w-2 h-2 bg-[#F7F3ED]/40 rounded-full"
        />
        <motion.div
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[35%] w-6 h-6 border border-[#C75D3A]/30"
        />
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-12 md:left-20 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-[#C75D3A]/50 to-transparent origin-top"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-8 right-8 w-24 h-24 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-16 h-px bg-[#C75D3A]/40" />
        <div className="absolute top-0 right-0 w-px h-16 bg-[#C75D3A]/40" />
        <div className="absolute top-3 right-3 w-2 h-2 bg-[#C75D3A]/30" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-8 w-24 h-24 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-16 h-px bg-[#C75D3A]/40" />
        <div className="absolute bottom-0 left-0 w-px h-16 bg-[#C75D3A]/40" />
        <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#C75D3A]/30" />
      </motion.div>

      <Container className="relative z-10 py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={heroItem} className="mb-8">
              <span className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#C75D3A]">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-px bg-[#C75D3A]"
                />
                AI-Powered Recruitment
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-[#F7F3ED] mb-8"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Where talent
              <br />
              meets{" "}
              <span className="italic text-[#C75D3A]">opportunity</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-xl md:text-2xl text-[#C4BEB4] max-w-xl leading-relaxed mb-12"
            >
              Transform your hiring process with AI that understands the human
              element. Find exceptional candidates, faster.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="primary" size="lg" href="#contact">
                Start Hiring Smarter
              </Button>
              <Button variant="secondary" size="lg" href="#features">
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative aspect-square max-w-md ml-auto">
              <svg
                viewBox="0 0 400 400"
                fill="none"
                className="w-full h-full"
              >
                <motion.circle
                  cx="200"
                  cy="200"
                  r="10"
                  fill="#C75D3A"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="28"
                  stroke="#C75D3A"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                />

                <motion.circle
                  cx="200"
                  cy="200"
                  r="40"
                  stroke="#C75D3A"
                  strokeWidth="1"
                  fill="none"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: [0.4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />

                {[
                  { x: 80, y: 100, delay: 1.0 },
                  { x: 320, y: 80, delay: 1.1 },
                  { x: 350, y: 220, delay: 1.2 },
                  { x: 300, y: 340, delay: 1.3 },
                  { x: 100, y: 320, delay: 1.4 },
                  { x: 50, y: 200, delay: 1.5 },
                ].map((node, i) => (
                  <g key={i}>
                    <motion.line
                      x1="200"
                      y1="200"
                      x2={node.x}
                      y2={node.y}
                      stroke="#F7F3ED"
                      strokeWidth="1"
                      opacity="0.2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: node.delay, duration: 0.5 }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="6"
                      fill="#F7F3ED"
                      opacity="0.7"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: node.delay + 0.3, duration: 0.3 }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="2"
                      fill="#C75D3A"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ delay: node.delay + 0.5, duration: 2, repeat: Infinity }}
                    />
                  </g>
                ))}

                <motion.circle
                  cx="200"
                  cy="200"
                  r="100"
                  stroke="#F7F3ED"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.1"
                  strokeDasharray="4 8"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="160"
                  stroke="#C75D3A"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.25"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.25 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={heroItem}
          initial="hidden"
          animate="visible"
          className="mt-20 pt-10 border-t border-[#F7F3ED]/10 grid grid-cols-3 gap-8 max-w-lg"
        >
          {[
            { number: "2,000+", label: "Companies" },
            { number: "500K+", label: "Hires Made" },
            { number: "60%", label: "Time Saved" },
          ].map((stat, index) => (
            <div key={stat.label} className="relative">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="block text-2xl md:text-3xl text-[#F7F3ED] mb-1"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {stat.number}
              </motion.span>
              <span className="text-sm text-[#8A847A]">{stat.label}</span>
              {index < 2 && (
                <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-[#C75D3A]/60 rounded-full hidden md:block" />
              )}
            </div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#8A847A]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
