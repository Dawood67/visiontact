"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui";
import { COMPANY, FOOTER_LINKS } from "@/app/lib/constants";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F0E0C] border-t border-[#F7F3ED]/5 pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute left-1/4 top-0 w-16 h-px bg-[#C75D3A]/30" />
        <div className="absolute right-1/4 top-0 w-16 h-px bg-[#C75D3A]/30" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247, 243, 237, 0.03) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-16"
        >
          <motion.div variants={fadeUp} className="col-span-2">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-xl text-[#F7F3ED] mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {COMPANY.name}
              <span className="w-1.5 h-1.5 bg-[#C75D3A] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-sm text-[#8A847A] leading-relaxed max-w-xs">
              Human-centered AI recruitment for the modern workplace. Where
              exceptional talent meets extraordinary opportunity.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {["X", "Li", "Gh"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-[#F7F3ED]/10 flex items-center justify-center text-xs text-[#8A847A] hover:text-[#F7F3ED] hover:border-[#C75D3A]/50 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-medium text-[#F7F3ED] mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#8A847A] hover:text-[#C4BEB4] transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-medium text-[#F7F3ED] mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#8A847A] hover:text-[#C4BEB4] transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-medium text-[#F7F3ED] mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#8A847A] hover:text-[#C4BEB4] transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-medium text-[#F7F3ED] mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#8A847A] hover:text-[#C4BEB4] transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="pt-8 border-t border-[#F7F3ED]/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#8A847A]">
            <span className="w-2 h-2 bg-[#C75D3A]/50" />
            <span>&copy; {currentYear} {COMPANY.name}</span>
            <span className="text-[#F7F3ED]/20">|</span>
            <span>All rights reserved</span>
          </div>
          <p className="text-sm text-[#8A847A]">
            Designed for the humans behind every hire
          </p>
        </div>
      </Container>
    </footer>
  );
}
