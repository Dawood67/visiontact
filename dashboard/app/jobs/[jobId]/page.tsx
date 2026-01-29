'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useDashboardStore } from '../../lib/store';
import { JOB_STATUS_CONFIG, JOB_TABS } from '../../lib/constants';
import { formatDate, pluralize } from '../../lib/utils';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { CandidatePipeline } from '../../components/pipeline/CandidatePipeline';
import { RubricList } from '../../components/rubric/RubricList';
import { AuditLog } from '../../components/audit/AuditLog';
import {
  ChevronLeftIcon,
  MapPinIcon,
  UsersIcon,
  CalendarIcon,
  EditIcon,
} from '../../components/ui/Icons';

interface PageProps {
  params: Promise<{ jobId: string }>;
}

export default function JobDetailPage({ params }: PageProps) {
  const { jobId } = use(params);
  const [activeTab, setActiveTab] = useState('candidates');
  const { getJobById, getCandidatesForJob } = useDashboardStore();

  const job = getJobById(jobId);
  const candidates = getCandidatesForJob(jobId);

  if (!job) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Job not found
            </h2>
            <p className="text-[var(--text-muted)] mb-4">
              The job you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/jobs" className="btn btn-primary">
              Back to Jobs
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const statusConfig = JOB_STATUS_CONFIG[job.status];

  const stageCounts = candidates.reduce(
    (acc, c) => {
      acc[c.stage] = (acc[c.stage] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <DashboardLayout>
      <div className="border-b border-[var(--border)] bg-[var(--bg-primary)]">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-4"
          >
            <ChevronLeftIcon size={16} />
            Back to Jobs
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="font-serif text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                  {job.title}
                </h1>
                <span
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: `${statusConfig.color}20`,
                    color: statusConfig.color,
                  }}
                >
                  {statusConfig.label}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] mb-3">{job.department}</p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <MapPinIcon size={14} />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <UsersIcon size={14} />
                  {candidates.length} {pluralize(candidates.length, 'candidate')}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarIcon size={14} />
                  Posted {formatDate(job.createdAt)}
                </span>
                <span className="capitalize">{job.type.replace('-', ' ')}</span>
              </div>
            </div>

            <button className="btn btn-secondary w-full sm:w-auto">
              <EditIcon size={16} />
              Edit Job
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-3 sm:p-4">
              <p className="text-xs text-[var(--text-muted)] mb-1">Applied</p>
              <p className="text-lg sm:text-xl font-semibold text-[#7BA3D4] tabular-nums">
                {stageCounts.applied || 0}
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-3 sm:p-4">
              <p className="text-xs text-[var(--text-muted)] mb-1">Shortlisted</p>
              <p className="text-lg sm:text-xl font-semibold text-[#E0B85C] tabular-nums">
                {stageCounts.shortlisted || 0}
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-3 sm:p-4">
              <p className="text-xs text-[var(--text-muted)] mb-1">Interview</p>
              <p className="text-lg sm:text-xl font-semibold text-[#96B580] tabular-nums">
                {stageCounts.interview || 0}
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-3 sm:p-4">
              <p className="text-xs text-[var(--text-muted)] mb-1">Rejected</p>
              <p className="text-lg sm:text-xl font-semibold text-[#D47A7A] tabular-nums">
                {stageCounts.rejected || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="tabs min-w-max">
            {JOB_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        {activeTab === 'candidates' && <CandidatePipeline jobId={jobId} />}
        {activeTab === 'rubric' && <RubricList jobId={jobId} />}
        {activeTab === 'audit' && <AuditLog jobId={jobId} />}
      </div>
    </DashboardLayout>
  );
}
