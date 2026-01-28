"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Container, SectionHeading } from "../ui";
import { fadeUp, staggerContainer } from "@/app/lib/animations";
import { METRICS } from "@/app/lib/constants";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      if (prefersReducedMotion) {
        setDisplayValue(value);
      } else {
        motionValue.set(value);
      }
    }
  }, [isInView, hasAnimated, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  return (
    <section id="results" className="relative py-32 bg-[#0F0E0C] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#C75D3A]/5 rounded-full blur-[150px]" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 93, 58, 0.12) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
        >
          <div className="absolute inset-0 border border-[#C75D3A]/15 rounded-full" />
          <div className="absolute inset-16 border border-dashed border-[#F7F3ED]/10 rounded-full" />
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#C75D3A]/30 rounded-full -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#F7F3ED]/20 rounded-full -translate-x-1/2" />
        </motion.div>

        <motion.div
          animate={{ y: [-20, 20, -20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-4 h-4 border border-[#C75D3A]/40 rotate-45"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[10%] w-3 h-3 bg-[#C75D3A]/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[20%] w-2 h-2 bg-[#F7F3ED]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[35%] left-[8%] w-5 h-5 border border-[#F7F3ED]/15"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-[#F7F3ED]/10 to-transparent" />
      </div>

      <svg
        className="absolute top-12 left-12 w-28 h-28 text-[#C75D3A]/30"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M0 0 L35 0 L35 4 L4 4 L4 35 L0 35 Z" fill="currentColor" />
        <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5" />
      </svg>
      <svg
        className="absolute bottom-12 right-12 w-28 h-28 text-[#C75D3A]/30 rotate-180"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M0 0 L35 0 L35 4 L4 4 L4 35 L0 35 Z" fill="currentColor" />
        <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5" />
      </svg>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Impact"
          title="Results that speak for themselves"
          description="Real metrics from real companies transforming their recruitment with Visiontact."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className="group relative"
            >
              <div className="relative bg-[#1A1918]/30 border border-[#F7F3ED]/5 p-8 md:p-10 text-center hover:border-[#C75D3A]/30 transition-all duration-500">
                <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#C75D3A]/40" />
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#C75D3A]/40" />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#C75D3A]/40" />
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[#C75D3A]/40" />

                <div
                  className="text-5xl md:text-6xl lg:text-7xl text-[#F7F3ED] mb-4 group-hover:text-[#C75D3A] transition-colors duration-500"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>

                <div className="w-8 h-px bg-[#C75D3A]/50 mx-auto mb-4" />

                <h3 className="text-base text-[#F7F3ED] mb-2">{metric.label}</h3>

                <p className="text-sm text-[#8A847A]">{metric.description}</p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-px bg-[#C75D3A] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
