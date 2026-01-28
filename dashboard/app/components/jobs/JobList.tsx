'use client';

import type { Job } from '../../lib/types';
import { JobCard } from './JobCard';
import { EmptyInboxIcon } from '../ui/Icons';

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <EmptyInboxIcon className="empty-state-icon" />
        <h3 className="empty-state-title">No jobs found</h3>
        <p className="empty-state-description">
          Create your first job posting to start receiving candidates.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
