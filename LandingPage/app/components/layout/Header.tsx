"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Button } from "../ui";
import { NAV_LINKS, COMPANY } from "@/app/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="h-20" />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            backgroundColor: isScrolled ? "rgba(15, 14, 12, 0.9)" : "transparent",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
            WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ease-out"
          style={{
            backgroundColor: "rgba(247, 243, 237, 0.08)",
            opacity: isScrolled ? 1 : 0,
          }}
        />

        <Container size="wide" className="relative">
          <nav className="flex items-center justify-between h-20">
            <a href="#" className="relative z-10 group">
              <span
                className="text-xl tracking-tight text-[#F7F3ED] group-hover:text-[#C75D3A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {COMPANY.name}
              </span>
            </a>

            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#C4BEB4] hover:text-[#F7F3ED] transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button variant="primary" size="sm" href="#contact">
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2 text-[#F7F3ED]"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-current origin-left"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-current"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-current origin-left"
                />
              </div>
            </button>
          </nav>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0F0E0C]"
          >
            <Container className="h-full flex flex-col justify-center">
              <nav className="space-y-8">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-4xl text-[#F7F3ED] hover:text-[#C75D3A] transition-colors"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
