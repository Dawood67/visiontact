"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-16 md:mb-24 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-block mb-4 text-sm tracking-[0.2em] uppercase text-[#C75D3A]"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl text-[#F7F3ED] leading-[1.1] tracking-tight mb-6"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-lg text-[#C4BEB4] leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
