import type { CandidateSortField, SortDirection } from './types';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateString);
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function getScoreColor(score: number): string {
  if (score >= 80) return 'score-high';
  if (score >= 60) return 'score-medium';
  return 'score-low';
}

export function getScoreLabel(score: number): string {
  if (score >= 90) return 'Excellent';
  if (score >= 80) return 'Very Good';
  if (score >= 70) return 'Good';
  if (score >= 60) return 'Fair';
  return 'Needs Review';
}

export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : plural || `${singular}s`;
}

export function parseSortValue(value: string): { field: CandidateSortField; direction: SortDirection } {
  const [field, direction] = value.split('-') as [CandidateSortField, SortDirection];
  return { field, direction };
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function generateResumePreview(): string {
  return `PROFESSIONAL SUMMARY
Experienced software engineer with a strong background in building scalable web applications. Passionate about clean code, user experience, and continuous learning.

EXPERIENCE

Senior Frontend Engineer | TechCorp Inc.
January 2022 - Present
• Led development of customer-facing dashboard serving 100K+ daily users
• Implemented design system reducing development time by 40%
• Mentored team of 4 junior developers
• Reduced bundle size by 60% through code splitting and optimization

Frontend Developer | StartupXYZ
June 2019 - December 2021
• Built React-based SPA from ground up
• Integrated with RESTful and GraphQL APIs
• Implemented comprehensive test coverage (90%+)
• Collaborated with design team on UI/UX improvements

EDUCATION

Bachelor of Science in Computer Science
State University | 2019

CERTIFICATIONS
• AWS Certified Developer - Associate
• Google Cloud Professional Developer`;
}
