// Job types
export type JobStatus = 'active' | 'paused' | 'closed' | 'draft';

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  status: JobStatus;
  description: string;
  requirements: string[];
  createdAt: string;
  updatedAt: string;
  candidatesCount: number;
}

// Candidate types
export type CandidateStage = 'applied' | 'shortlisted' | 'interview' | 'rejected';

export interface Candidate {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: number; // years
  skills: string[];
  stage: CandidateStage;
  score: number; // 0-100
  appliedAt: string;
  updatedAt: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  notes?: string;
}

// AI Evaluation types
export interface AIEvaluation {
  candidateId: string;
  overallScore: number;
  strengths: string[];
  concerns: string[];
  recommendation: 'strongly_recommend' | 'recommend' | 'neutral' | 'not_recommend';
  criteriaScores: CriterionScore[];
  generatedAt: string;
}

export interface CriterionScore {
  criterionId: string;
  criterionName: string;
  score: number;
  maxScore: number;
  notes?: string;
}

// Evaluation Rubric types
export interface Criterion {
  id: string;
  jobId: string;
  name: string;
  description: string;
  weight: number; // percentage, all should sum to 100
  order: number;
}

export interface EvaluationRubric {
  jobId: string;
  criteria: Criterion[];
  totalWeight: number;
  isValid: boolean;
}

// Audit Log types
export type AuditAction =
  | 'candidate_applied'
  | 'candidate_moved'
  | 'candidate_rejected'
  | 'candidate_shortlisted'
  | 'candidate_interviewed'
  | 'evaluation_generated'
  | 'rubric_updated'
  | 'job_created'
  | 'job_updated'
  | 'note_added';

export interface AuditEntry {
  id: string;
  jobId: string;
  candidateId?: string;
  action: AuditAction;
  description: string;
  performedBy: string;
  metadata?: Record<string, unknown>;
  timestamp: string;
}

// Filter and Sort types
export interface CandidateFilters {
  stage?: CandidateStage | 'all';
  search?: string;
}

export type CandidateSortField = 'score' | 'name' | 'date';
export type SortDirection = 'asc' | 'desc';

export interface CandidateSort {
  field: CandidateSortField;
  direction: SortDirection;
}

// Store types
export interface DashboardState {
  // Jobs
  jobs: Job[];
  selectedJobId: string | null;

  // Candidates
  candidates: Candidate[];
  selectedCandidateId: string | null;

  // Rubrics (stored by jobId)
  rubrics: Record<string, EvaluationRubric>;

  // AI Evaluations (stored by candidateId)
  evaluations: Record<string, AIEvaluation>;

  // Audit logs
  auditLogs: AuditEntry[];

  // Filters
  candidateFilters: CandidateFilters;
  candidateSort: CandidateSort;

  // Actions
  setSelectedJob: (jobId: string | null) => void;
  setSelectedCandidate: (candidateId: string | null) => void;
  moveCandidate: (candidateId: string, newStage: CandidateStage) => void;
  updateCandidate: (candidateId: string, updates: Partial<Candidate>) => void;
  setCandidateFilters: (filters: CandidateFilters) => void;
  setCandidateSort: (sort: CandidateSort) => void;

  // Rubric actions
  addCriterion: (jobId: string, criterion: Omit<Criterion, 'id' | 'order'>) => void;
  updateCriterion: (jobId: string, criterionId: string, updates: Partial<Criterion>) => void;
  deleteCriterion: (jobId: string, criterionId: string) => void;
  reorderCriteria: (jobId: string, criteriaIds: string[]) => void;

  // Audit actions
  addAuditEntry: (entry: Omit<AuditEntry, 'id' | 'timestamp'>) => void;
}

// UI types
export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface DropdownOption {
  value: string;
  label: string;
}
