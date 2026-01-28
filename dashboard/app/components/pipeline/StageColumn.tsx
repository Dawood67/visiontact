'use client';

import type { Candidate, CandidateStage } from '../../lib/types';
import { STAGE_CONFIG } from '../../lib/constants';
import { CandidateCard } from './CandidateCard';
import { EmptyInboxIcon } from '../ui/Icons';

interface StageColumnProps {
  stage: CandidateStage;
  candidates: Candidate[];
  onDrop?: (candidateId: string, newStage: CandidateStage) => void;
}

export function StageColumn({ stage, candidates, onDrop }: StageColumnProps) {
  const config = STAGE_CONFIG[stage];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-[var(--bg-tertiary)]');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('bg-[var(--bg-tertiary)]');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-[var(--bg-tertiary)]');
    const candidateId = e.dataTransfer.getData('candidateId');
    if (candidateId && onDrop) {
      onDrop(candidateId, stage);
    }
  };

  return (
    <div
      className="flex-1 min-w-[280px] max-w-[320px] bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Header */}
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: config.color }}
            />
            <h3 className="font-medium text-sm text-[var(--text-primary)]">
              {config.label}
            </h3>
          </div>
          <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2 py-0.5 rounded-full">
            {candidates.length}
          </span>
        </div>
      </div>

      {/* Candidates */}
      <div className="p-3 space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto">
        {candidates.length === 0 ? (
          <div className="py-8 text-center">
            <EmptyInboxIcon className="w-10 h-10 mx-auto mb-2 text-[var(--text-muted)] opacity-50" />
            <p className="text-xs text-[var(--text-muted)]">No candidates</p>
          </div>
        ) : (
          candidates.map((candidate) => (
            <div
              key={candidate.id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('candidateId', candidate.id);
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <CandidateCard candidate={candidate} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
