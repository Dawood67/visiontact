"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-[#C75D3A] text-[#F7F3ED] hover:bg-[#E07A5F] border border-transparent",
    secondary:
      "bg-transparent text-[#F7F3ED] border border-[#F7F3ED]/20 hover:border-[#F7F3ED]/40 hover:bg-[#F7F3ED]/5",
    ghost:
      "bg-transparent text-[#C4BEB4] hover:text-[#F7F3ED] border-none",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
