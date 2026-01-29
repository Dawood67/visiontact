'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LogoIcon,
  BriefcaseIcon,
  UsersIcon,
  ChartIcon,
  SettingsIcon,
  XIcon,
} from '../ui/Icons';
import { cn } from '../../lib/utils';

const navItems = [
  { href: '/jobs', label: 'Jobs', icon: BriefcaseIcon },
  { href: '/candidates', label: 'All Candidates', icon: UsersIcon },
  { href: '/analytics', label: 'Analytics', icon: ChartIcon },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 bottom-0 w-64 bg-[var(--bg-secondary)] border-r border-[var(--border)] flex flex-col z-50",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
      <div className="p-6 border-b border-[var(--border)]">
        <div className="flex items-center justify-between">
          <Link href="/jobs" className="flex items-center gap-3" onClick={onClose}>
            <LogoIcon size={36} />
            <div>
              <span className="font-serif text-lg font-semibold text-[var(--text-primary)]">
                Visiontact
              </span>
              <span className="block text-xs text-[var(--text-muted)]">
                Recruiter Workspace
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            aria-label="Close menu"
          >
            <XIcon size={20} />
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium',
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'
                  )}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="avatar avatar-sm bg-[var(--accent)]">
            <span className="text-[var(--text-primary)]">AM</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[var(--text-primary)] truncate">
              Alex Morgan
            </p>
            <p className="text-xs text-[var(--text-muted)] truncate">
              Senior Recruiter
            </p>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
