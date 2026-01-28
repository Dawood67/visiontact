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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-start gap-5">
            <div className="avatar avatar-lg bg-[var(--accent)]">
              <span className="text-[var(--text-primary)]">
                {getInitials(candidate.name)}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="font-serif text-xl font-semibold text-[var(--text-primary)]">
                  {candidate.name}
                </h2>
                <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${stageConfig.bgClass}`}>
                  {stageConfig.label}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">{candidate.role}</p>

              <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
                <a
                  href={`mailto:${candidate.email}`}
                  className="flex items-center gap-1.5 hover:text-[var(--text-secondary)]"
                >
                  <MailIcon size={14} />
                  {candidate.email}
                </a>
                <a
                  href={`tel:${candidate.phone}`}
                  className="flex items-center gap-1.5 hover:text-[var(--text-secondary)]"
                >
                  <PhoneIcon size={14} />
                  {candidate.phone}
                </a>
                {candidate.linkedinUrl && (
                  <a
                    href={candidate.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[var(--text-secondary)]"
                  >
                    <LinkedinIcon size={14} />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            <div className="text-right">
              <div className={`text-3xl font-bold tabular-nums ${scoreColorClass}`}>
                {candidate.score}
              </div>
              <p className="text-xs text-[var(--text-muted)]">{getScoreLabel(candidate.score)}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[var(--border)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center">
                <BriefcaseIcon size={16} className="text-[var(--text-muted)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {candidate.experience} years
                </p>
                <p className="text-xs text-[var(--text-muted)]">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center">
                <CalendarIcon size={16} className="text-[var(--text-muted)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {formatDate(candidate.appliedAt)}
                </p>
                <p className="text-xs text-[var(--text-muted)]">Applied</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center">
                <StarIcon size={16} className="text-[var(--text-muted)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {candidate.skills.length} skills
                </p>
                <p className="text-xs text-[var(--text-muted)]">Listed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
          <h3 className="font-medium text-[var(--text-primary)] mb-4">Skills</h3>
          <SkillsTags skills={candidate.skills} />
        </div>

        <ResumePreview candidateName={candidate.name} />

        {candidate.notes && (
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-medium text-[var(--text-primary)] mb-3">Notes</h3>
            <p className="text-sm text-[var(--text-secondary)]">{candidate.notes}</p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
          <h3 className="font-medium text-[var(--text-primary)] mb-4">Actions</h3>
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
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
              <span className="text-[var(--text-muted)]">AI</span>
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
