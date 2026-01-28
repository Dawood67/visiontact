import type { CandidateStage, JobStatus, AuditAction } from './types';

export const COMPANY = {
  name: 'Visiontact',
  tagline: 'Recruiter Workspace',
};

export const NAV_LINKS = [
  { label: 'Jobs', href: '/jobs', icon: 'briefcase' },
  { label: 'Candidates', href: '/candidates', icon: 'users' },
  { label: 'Analytics', href: '/analytics', icon: 'chart' },
  { label: 'Settings', href: '/settings', icon: 'settings' },
];

export const STAGE_CONFIG: Record<
  CandidateStage,
  { label: string; color: string; bgClass: string }
> = {
  applied: {
    label: 'Applied',
    color: '#5D8AC7',
    bgClass: 'stage-applied',
  },
  shortlisted: {
    label: 'Shortlisted',
    color: '#D4A54C',
    bgClass: 'stage-shortlisted',
  },
  interview: {
    label: 'Interview',
    color: '#7D9D6A',
    bgClass: 'stage-interview',
  },
  rejected: {
    label: 'Rejected',
    color: '#C75D5D',
    bgClass: 'stage-rejected',
  },
};

export const STAGE_ORDER: CandidateStage[] = ['applied', 'shortlisted', 'interview', 'rejected'];

export const JOB_STATUS_CONFIG: Record<
  JobStatus,
  { label: string; color: string }
> = {
  active: { label: 'Active', color: '#7D9D6A' },
  paused: { label: 'Paused', color: '#D4A54C' },
  closed: { label: 'Closed', color: '#8A847A' },
  draft: { label: 'Draft', color: '#5D8AC7' },
};

export const AUDIT_ACTION_CONFIG: Record<
  AuditAction,
  { label: string; icon: string; color: string }
> = {
  candidate_applied: {
    label: 'Applied',
    icon: 'user-plus',
    color: '#5D8AC7',
  },
  candidate_moved: {
    label: 'Moved',
    icon: 'arrow-right',
    color: '#C4BEB4',
  },
  candidate_rejected: {
    label: 'Rejected',
    icon: 'x-circle',
    color: '#C75D5D',
  },
  candidate_shortlisted: {
    label: 'Shortlisted',
    icon: 'star',
    color: '#D4A54C',
  },
  candidate_interviewed: {
    label: 'Interview',
    icon: 'calendar',
    color: '#7D9D6A',
  },
  evaluation_generated: {
    label: 'AI Evaluation',
    icon: 'cpu',
    color: '#C75D3A',
  },
  rubric_updated: {
    label: 'Rubric Updated',
    icon: 'sliders',
    color: '#C4BEB4',
  },
  job_created: {
    label: 'Job Created',
    icon: 'plus-circle',
    color: '#7D9D6A',
  },
  job_updated: {
    label: 'Job Updated',
    icon: 'edit',
    color: '#C4BEB4',
  },
  note_added: {
    label: 'Note Added',
    icon: 'message-square',
    color: '#5D8AC7',
  },
};

export const SORT_OPTIONS = [
  { value: 'score-desc', label: 'Score (High to Low)' },
  { value: 'score-asc', label: 'Score (Low to High)' },
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'date-desc', label: 'Date (Newest)' },
  { value: 'date-asc', label: 'Date (Oldest)' },
];

export const JOB_TABS = [
  { id: 'candidates', label: 'Candidates' },
  { id: 'rubric', label: 'Evaluation Rubric' },
  { id: 'audit', label: 'Activity Log' },
];

export const RECOMMENDATION_CONFIG = {
  strongly_recommend: {
    label: 'Strongly Recommend',
    color: '#7D9D6A',
    bgClass: 'bg-[rgba(125,157,106,0.15)]',
  },
  recommend: {
    label: 'Recommend',
    color: '#96B580',
    bgClass: 'bg-[rgba(125,157,106,0.1)]',
  },
  neutral: {
    label: 'Neutral',
    color: '#D4A54C',
    bgClass: 'bg-[rgba(212,165,76,0.15)]',
  },
  not_recommend: {
    label: 'Not Recommended',
    color: '#C75D5D',
    bgClass: 'bg-[rgba(199,93,93,0.15)]',
  },
};
