'use client';

import { use } from 'react';
import Link from 'next/link';
import { useDashboardStore } from '../../../../lib/store';
import { DashboardLayout } from '../../../../components/layout/DashboardLayout';
import { CandidateProfile } from '../../../../components/candidates/CandidateProfile';
import { ChevronLeftIcon } from '../../../../components/ui/Icons';
import type { CandidateStage } from '../../../../lib/types';

interface PageProps {
  params: Promise<{ jobId: string; candidateId: string }>;
}

export default function CandidateProfilePage({ params }: PageProps) {
  const { jobId, candidateId } = use(params);
  const {
    getCandidateById,
    getJobById,
    getEvaluationForCandidate,
    moveCandidate,
  } = useDashboardStore();

  const candidate = getCandidateById(candidateId);
  const job = getJobById(jobId);
  const evaluation = getEvaluationForCandidate(candidateId);

  if (!candidate || !job) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Candidate not found
            </h2>
            <p className="text-[var(--text-muted)] mb-4">
              The candidate you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href={`/jobs/${jobId}`} className="btn btn-primary">
              Back to Job
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const handleMoveToStage = (stage: CandidateStage) => {
    moveCandidate(candidateId, stage);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-primary)] px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
          <Link href="/jobs" className="hover:text-[var(--text-secondary)]">
            Jobs
          </Link>
          <span>/</span>
          <Link href={`/jobs/${jobId}`} className="hover:text-[var(--text-secondary)]">
            {job.title}
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">{candidate.name}</span>
        </div>

        {/* Back link */}
        <Link
          href={`/jobs/${jobId}`}
          className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        >
          <ChevronLeftIcon size={16} />
          Back to Pipeline
        </Link>
      </div>

      {/* Content */}
      <div className="p-8">
        <CandidateProfile
          candidate={candidate}
          evaluation={evaluation}
          onMoveToStage={handleMoveToStage}
        />
      </div>
    </DashboardLayout>
  );
}
