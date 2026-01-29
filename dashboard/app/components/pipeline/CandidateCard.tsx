'use client';

import Link from 'next/link';
import type { Candidate } from '../../lib/types';
import { getInitials, getScoreColor, formatRelativeTime } from '../../lib/utils';

interface CandidateCardProps {
  candidate: Candidate;
  showActions?: boolean;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  const scoreColorClass = getScoreColor(candidate.score);

  return (
    <Link href={`/jobs/${candidate.jobId}/candidates/${candidate.id}`}>
      <div className="p-3 sm:p-4 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg card-interactive cursor-pointer">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="avatar avatar-sm sm:avatar flex-shrink-0">
            {getInitials(candidate.name)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h4 className="font-medium text-sm text-[var(--text-primary)] truncate">
                {candidate.name}
              </h4>
              <span className={`text-sm font-semibold tabular-nums ${scoreColorClass}`}>
                {candidate.score}
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] truncate mb-2">
              {candidate.role} &middot; {candidate.experience}y exp
            </p>

            <div className="flex flex-wrap gap-1">
              {candidate.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="px-1.5 py-0.5 text-[10px] bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded"
                >
                  {skill}
                </span>
              ))}
              {candidate.skills.length > 3 && (
                <span className="px-1.5 py-0.5 text-[10px] text-[var(--text-muted)]">
                  +{candidate.skills.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
          Applied {formatRelativeTime(candidate.appliedAt)}
        </div>
      </div>
    </Link>
  );
}
