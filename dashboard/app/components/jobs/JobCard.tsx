'use client';

import Link from 'next/link';
import type { Job } from '../../lib/types';
import { JOB_STATUS_CONFIG } from '../../lib/constants';
import { formatDate, pluralize } from '../../lib/utils';
import { MapPinIcon, UsersIcon, ChevronRightIcon } from '../ui/Icons';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const statusConfig = JOB_STATUS_CONFIG[job.status];

  return (
    <Link href={`/jobs/${job.id}`}>
      <article className="p-5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl card-interactive cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-[var(--text-primary)] truncate">
                {job.title}
              </h3>
              <span
                className="px-2 py-0.5 text-xs font-medium rounded-full"
                style={{
                  backgroundColor: `${statusConfig.color}20`,
                  color: statusConfig.color,
                }}
              >
                {statusConfig.label}
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)]">{job.department}</p>
          </div>
          <ChevronRightIcon
            className="text-[var(--text-muted)] flex-shrink-0"
            size={20}
          />
        </div>

        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
          <span className="flex items-center gap-1.5">
            <MapPinIcon size={14} className="text-[var(--text-muted)]" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon size={14} className="text-[var(--text-muted)]" />
            {job.candidatesCount} {pluralize(job.candidatesCount, 'candidate')}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>Posted {formatDate(job.createdAt)}</span>
          <span className="capitalize">{job.type.replace('-', ' ')}</span>
        </div>
      </article>
    </Link>
  );
}
