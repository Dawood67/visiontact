'use client';

import { useState } from 'react';
import { useDashboardStore } from '../../lib/store';
import { CriterionRow } from './CriterionRow';
import { AddCriterionModal } from './AddCriterionModal';
import { PlusIcon, AlertCircleIcon, CheckIcon } from '../ui/Icons';

interface RubricListProps {
  jobId: string;
}

export function RubricList({ jobId }: RubricListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    getRubricForJob,
    addCriterion,
    updateCriterion,
    deleteCriterion,
  } = useDashboardStore();

  const rubric = getRubricForJob(jobId);
  const criteria = rubric?.criteria || [];
  const totalWeight = rubric?.totalWeight || 0;
  const isValid = totalWeight === 100;
  const remainingWeight = 100 - totalWeight;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-medium text-[var(--text-primary)] mb-1">
            Evaluation Criteria
          </h3>
          <p className="text-sm text-[var(--text-muted)]">
            Define the criteria used to evaluate candidates for this position.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary"
        >
          <PlusIcon size={16} />
          Add Criterion
        </button>
      </div>

      <div
        className={`flex items-center gap-3 p-4 rounded-lg mb-6 ${
          isValid
            ? 'bg-[rgba(125,157,106,0.1)] border border-[rgba(125,157,106,0.3)]'
            : 'bg-[rgba(212,165,76,0.1)] border border-[rgba(212,165,76,0.3)]'
        }`}
      >
        {isValid ? (
          <CheckIcon size={18} className="text-[#7D9D6A]" />
        ) : (
          <AlertCircleIcon size={18} className="text-[#D4A54C]" />
        )}
        <div className="flex-1">
          <p className={`text-sm font-medium ${isValid ? 'text-[#96B580]' : 'text-[#E0B85C]'}`}>
            Total Weight: {totalWeight}%
          </p>
          {!isValid && (
            <p className="text-xs text-[var(--text-muted)]">
              {totalWeight < 100
                ? `Add ${remainingWeight}% more weight to reach 100%`
                : `Remove ${-remainingWeight}% to reach 100%`}
            </p>
          )}
        </div>
        <div className="w-32">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${Math.min(totalWeight, 100)}%`,
                backgroundColor: isValid ? '#7D9D6A' : totalWeight > 100 ? '#C75D5D' : '#D4A54C',
              }}
            />
          </div>
        </div>
      </div>

      {criteria.length === 0 ? (
        <div className="empty-state py-12 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
            <PlusIcon size={24} className="text-[var(--text-muted)]" />
          </div>
          <h4 className="empty-state-title">No criteria defined</h4>
          <p className="empty-state-description">
            Add evaluation criteria to help assess candidates consistently.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary mt-4"
          >
            Add First Criterion
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {criteria
            .sort((a, b) => a.order - b.order)
            .map((criterion) => (
              <CriterionRow
                key={criterion.id}
                criterion={criterion}
                onUpdate={(updates) => updateCriterion(jobId, criterion.id, updates)}
                onDelete={() => deleteCriterion(jobId, criterion.id)}
              />
            ))}
        </div>
      )}

      <AddCriterionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(criterion) => addCriterion(criterion.jobId, criterion)}
        jobId={jobId}
        remainingWeight={remainingWeight}
      />
    </div>
  );
}
