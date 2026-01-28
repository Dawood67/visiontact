'use client';

import { useState } from 'react';
import { useDashboardStore } from '../lib/store';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Header } from '../components/layout/Header';
import { JobList } from '../components/jobs/JobList';
import { PlusIcon, FilterIcon } from '../components/ui/Icons';
import type { JobStatus } from '../lib/types';

const statusFilters: { value: JobStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All Jobs' },
  { value: 'active', label: 'Active' },
  { value: 'paused', label: 'Paused' },
  { value: 'draft', label: 'Draft' },
  { value: 'closed', label: 'Closed' },
];

export default function JobsPage() {
  const { jobs } = useDashboardStore();
  const [statusFilter, setStatusFilter] = useState<JobStatus | 'all'>('all');

  const filteredJobs =
    statusFilter === 'all'
      ? jobs
      : jobs.filter((job) => job.status === statusFilter);

  // Count jobs by status
  const jobCounts = jobs.reduce(
    (acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    },
    {} as Record<JobStatus, number>
  );

  return (
    <DashboardLayout>
      <Header
        title="Jobs"
        subtitle={`${jobs.length} total positions`}
        actions={
          <button className="btn btn-primary">
            <PlusIcon size={16} />
            Create Job
          </button>
        }
      />

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
            <p className="text-sm text-[var(--text-muted)] mb-1">Active Jobs</p>
            <p className="text-2xl font-semibold text-[var(--text-primary)] tabular-nums">
              {jobCounts.active || 0}
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
            <p className="text-sm text-[var(--text-muted)] mb-1">Total Candidates</p>
            <p className="text-2xl font-semibold text-[var(--text-primary)] tabular-nums">
              {jobs.reduce((sum, job) => sum + job.candidatesCount, 0)}
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
            <p className="text-sm text-[var(--text-muted)] mb-1">Paused</p>
            <p className="text-2xl font-semibold text-[var(--text-primary)] tabular-nums">
              {jobCounts.paused || 0}
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
            <p className="text-sm text-[var(--text-muted)] mb-1">Drafts</p>
            <p className="text-2xl font-semibold text-[var(--text-primary)] tabular-nums">
              {jobCounts.draft || 0}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <FilterIcon size={16} className="text-[var(--text-muted)]" />
            <span className="text-sm text-[var(--text-muted)]">Filter:</span>
          </div>
          <div className="flex gap-2">
            {statusFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setStatusFilter(filter.value)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                  statusFilter === filter.value
                    ? 'bg-[var(--accent)] text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job list */}
        <JobList jobs={filteredJobs} />
      </div>
    </DashboardLayout>
  );
}
