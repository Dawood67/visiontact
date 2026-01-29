'use client';

import type { Candidate, AIEvaluation } from '../../lib/types';
import { STAGE_CONFIG } from '../../lib/constants';
import { getInitials, formatDate, getScoreColor, getScoreLabel } from '../../lib/utils';
import { SkillsTags } from './SkillsTags';
import { ResumePreview } from './ResumePreview';
import { AIEvaluationCard } from './AIEvaluationCard';
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  BriefcaseIcon,
  CalendarIcon,
  StarIcon,
  XIcon,
  CheckIcon,
} from '../ui/Icons';

interface CandidateProfileProps {
  candidate: Candidate;
  evaluation?: AIEvaluation;
  onMoveToStage: (stage: 'shortlisted' | 'interview' | 'rejected') => void;
}

export function CandidateProfile({
  candidate,
  evaluation,
  onMoveToStage,
}: CandidateProfileProps) {
  const stageConfig = STAGE_CONFIG[candidate.stage];
  const scoreColorClass = getScoreColor(candidate.score);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <div className="lg:col-span-2 space-y-4 sm:space-y-6">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
            <div className="flex items-center gap-4 sm:block">
              <div className="avatar avatar-lg bg-[var(--accent)]">
                <span className="text-[var(--text-primary)]">
                  {getInitials(candidate.name)}
                </span>
              </div>
              {/* Mobile score display */}
              <div className="sm:hidden text-right">
                <div className={`text-2xl font-bold tabular-nums ${scoreColorClass}`}>
                  {candidate.score}
                </div>
                <p className="text-xs text-[var(--text-muted)]">{getScoreLabel(candidate.score)}</p>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                <h2 className="font-serif text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                  {candidate.name}
                </h2>
                <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${stageConfig.bgClass}`}>
                  {stageConfig.label}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] mb-3 sm:mb-4">{candidate.role}</p>

              <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-[var(--text-muted)]">
                <a
                  href={`mailto:${candidate.email}`}
                  className="flex items-center gap-1.5 hover:text-[var(--text-secondary)] break-all"
                >
                  <MailIcon size={14} className="flex-shrink-0" />
                  <span className="truncate">{candidate.email}</span>
                </a>
                <a
                  href={`tel:${candidate.phone}`}
                  className="flex items-center gap-1.5 hover:text-[var(--text-secondary)]"
                >
                  <PhoneIcon size={14} className="flex-shrink-0" />
                  {candidate.phone}
                </a>
                {candidate.linkedinUrl && (
                  <a
                    href={candidate.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[var(--text-secondary)]"
                  >
                    <LinkedinIcon size={14} className="flex-shrink-0" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* Desktop score display */}
            <div className="hidden sm:block text-right flex-shrink-0">
              <div className={`text-3xl font-bold tabular-nums ${scoreColorClass}`}>
                {candidate.score}
              </div>
              <p className="text-xs text-[var(--text-muted)]">{getScoreLabel(candidate.score)}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[var(--border)]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0">
                <BriefcaseIcon size={14} className="text-[var(--text-muted)] sm:hidden" />
                <BriefcaseIcon size={16} className="text-[var(--text-muted)] hidden sm:block" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                  {candidate.experience} yrs
                </p>
                <p className="text-xs text-[var(--text-muted)]">Exp</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0">
                <CalendarIcon size={14} className="text-[var(--text-muted)] sm:hidden" />
                <CalendarIcon size={16} className="text-[var(--text-muted)] hidden sm:block" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)] truncate">
                  {formatDate(candidate.appliedAt)}
                </p>
                <p className="text-xs text-[var(--text-muted)]">Applied</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0">
                <StarIcon size={14} className="text-[var(--text-muted)] sm:hidden" />
                <StarIcon size={16} className="text-[var(--text-muted)] hidden sm:block" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                  {candidate.skills.length} skills
                </p>
                <p className="text-xs text-[var(--text-muted)]">Listed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 sm:p-6">
          <h3 className="font-medium text-[var(--text-primary)] mb-3 sm:mb-4">Skills</h3>
          <SkillsTags skills={candidate.skills} />
        </div>

        <ResumePreview candidateName={candidate.name} />

        {candidate.notes && (
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 sm:p-6">
            <h3 className="font-medium text-[var(--text-primary)] mb-3">Notes</h3>
            <p className="text-sm text-[var(--text-secondary)]">{candidate.notes}</p>
          </div>
        )}
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 sm:p-5">
          <h3 className="font-medium text-[var(--text-primary)] mb-3 sm:mb-4">Actions</h3>
          <div className="space-y-2">
            {candidate.stage !== 'shortlisted' && candidate.stage !== 'interview' && (
              <button
                onClick={() => onMoveToStage('shortlisted')}
                className="btn btn-success w-full justify-start"
              >
                <StarIcon size={16} />
                Move to Shortlist
              </button>
            )}
            {candidate.stage !== 'interview' && (
              <button
                onClick={() => onMoveToStage('interview')}
                className="btn btn-primary w-full justify-start"
              >
                <CheckIcon size={16} />
                Schedule Interview
              </button>
            )}
            {candidate.stage !== 'rejected' && (
              <button
                onClick={() => onMoveToStage('rejected')}
                className="btn btn-danger w-full justify-start"
              >
                <XIcon size={16} />
                Reject Candidate
              </button>
            )}
          </div>
        </div>

        {evaluation ? (
          <AIEvaluationCard evaluation={evaluation} />
        ) : (
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
              <span className="text-[var(--text-muted)] text-sm sm:text-base">AI</span>
            </div>
            <h3 className="font-medium text-[var(--text-primary)] mb-1">
              No AI Evaluation
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              AI evaluation has not been generated for this candidate yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
