"use client";

import { SearchIcon } from "../ui/Icons";

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="h-16 border-b border-[var(--border)] bg-[var(--bg-primary)] flex items-center justify-between px-8">
      <div>
        <h1 className="font-serif text-xl font-semibold text-[var(--text-primary)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-[var(--text-muted)]">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          {/* <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            size={16}
          /> */}
          <input
            type="text"
            placeholder="Search..."
            className="input pl-9 w-64 h-9 text-sm"
          />
        </div>

        {actions}
      </div>
    </header>
  );
}
