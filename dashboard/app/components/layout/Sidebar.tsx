'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LogoIcon,
  BriefcaseIcon,
  UsersIcon,
  ChartIcon,
  SettingsIcon,
} from '../ui/Icons';
import { cn } from '../../lib/utils';

const navItems = [
  { href: '/jobs', label: 'Jobs', icon: BriefcaseIcon },
  { href: '/candidates', label: 'All Candidates', icon: UsersIcon },
  { href: '/analytics', label: 'Analytics', icon: ChartIcon },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[var(--bg-secondary)] border-r border-[var(--border)] flex flex-col">
      <div className="p-6 border-b border-[var(--border)]">
        <Link href="/jobs" className="flex items-center gap-3">
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
  );
}
