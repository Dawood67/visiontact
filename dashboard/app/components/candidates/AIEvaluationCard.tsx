'use client';

import type { AIEvaluation } from '../../lib/types';
import { RECOMMENDATION_CONFIG } from '../../lib/constants';
import { formatDate, getScoreColor } from '../../lib/utils';
import { CpuIcon, CheckIcon, AlertCircleIcon } from '../ui/Icons';

interface AIEvaluationCardProps {
  evaluation: AIEvaluation;
}

export function AIEvaluationCard({ evaluation }: AIEvaluationCardProps) {
  const recommendConfig = RECOMMENDATION_CONFIG[evaluation.recommendation];
  const scoreColorClass = getScoreColor(evaluation.overallScore);

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl overflow-hidden">
      <div className="p-5 border-b border-[var(--border)] bg-[rgba(199,93,58,0.05)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center">
            <CpuIcon size={20} className="text-[var(--text-primary)]" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-[var(--text-primary)]">AI Evaluation</h3>
            <p className="text-xs text-[var(--text-muted)]">
              Generated {formatDate(evaluation.generatedAt)}
            </p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold tabular-nums ${scoreColorClass}`}>
              {evaluation.overallScore}
            </div>
            <p className="text-xs text-[var(--text-muted)]">Overall Score</p>
          </div>
        </div>
      </div>

      <div className="p-5 border-b border-[var(--border)]">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${recommendConfig.bgClass}`}
          style={{ color: recommendConfig.color }}
        >
          <CheckIcon size={14} />
          {recommendConfig.label}
        </div>
      </div>

      <div className="p-5 border-b border-[var(--border)]">
        <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">
          Criteria Breakdown
        </h4>
        <div className="space-y-3">
          {evaluation.criteriaScores.map((cs) => (
            <div key={cs.criterionId}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-[var(--text-secondary)]">
                  {cs.criterionName}
                </span>
                <span className={`text-sm font-semibold tabular-nums ${getScoreColor(cs.score)}`}>
                  {cs.score}/{cs.maxScore}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(cs.score / cs.maxScore) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 border-b border-[var(--border)]">
        <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-3 flex items-center gap-2">
          <CheckIcon size={14} className="text-[#7D9D6A]" />
          Strengths
        </h4>
        <ul className="space-y-2">
          {evaluation.strengths.map((strength, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
              <span className="text-[#7D9D6A] mt-1">+</span>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5">
        <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-3 flex items-center gap-2">
          <AlertCircleIcon size={14} className="text-[#D4A54C]" />
          Areas of Concern
        </h4>
        {evaluation.concerns.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)]">No significant concerns identified.</p>
        ) : (
          <ul className="space-y-2">
            {evaluation.concerns.map((concern, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[#D4A54C] mt-1">!</span>
                {concern}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
