"use client";

import { SearchIcon } from "../ui/Icons";

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="min-h-16 border-b border-[var(--border)] bg-[var(--bg-primary)] flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-0 gap-3 sm:gap-4">
      <div className="min-w-0">
        <h1 className="font-serif text-lg sm:text-xl font-semibold text-[var(--text-primary)] truncate">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm text-[var(--text-muted)] truncate">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="input pl-9 w-48 lg:w-64 h-9 text-sm"
          />
        </div>

        {actions}
      </div>
    </header>
  );
}
