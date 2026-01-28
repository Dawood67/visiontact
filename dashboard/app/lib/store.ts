'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  Job,
  Candidate,
  CandidateStage,
  EvaluationRubric,
  Criterion,
  AIEvaluation,
  AuditEntry,
  CandidateFilters,
  CandidateSort,
} from './types';
import {
  MOCK_JOBS,
  MOCK_CANDIDATES,
  MOCK_RUBRICS,
  MOCK_EVALUATIONS,
  MOCK_AUDIT_LOGS,
} from './mock-data';

interface DashboardStore {
  jobs: Job[];
  candidates: Candidate[];
  rubrics: Record<string, EvaluationRubric>;
  evaluations: Record<string, AIEvaluation>;
  auditLogs: AuditEntry[];

  selectedJobId: string | null;
  selectedCandidateId: string | null;

  candidateFilters: CandidateFilters;
  candidateSort: CandidateSort;

  setSelectedJob: (jobId: string | null) => void;
  setSelectedCandidate: (candidateId: string | null) => void;

  moveCandidate: (candidateId: string, newStage: CandidateStage) => void;
  updateCandidate: (candidateId: string, updates: Partial<Candidate>) => void;

  setCandidateFilters: (filters: CandidateFilters) => void;
  setCandidateSort: (sort: CandidateSort) => void;

  addCriterion: (jobId: string, criterion: Omit<Criterion, 'id' | 'order'>) => void;
  updateCriterion: (jobId: string, criterionId: string, updates: Partial<Criterion>) => void;
  deleteCriterion: (jobId: string, criterionId: string) => void;
  reorderCriteria: (jobId: string, criteriaIds: string[]) => void;

  addAuditEntry: (entry: Omit<AuditEntry, 'id' | 'timestamp'>) => void;

  getJobById: (jobId: string) => Job | undefined;
  getCandidateById: (candidateId: string) => Candidate | undefined;
  getCandidatesForJob: (jobId: string) => Candidate[];
  getFilteredCandidates: (jobId: string) => Candidate[];
  getRubricForJob: (jobId: string) => EvaluationRubric | undefined;
  getEvaluationForCandidate: (candidateId: string) => AIEvaluation | undefined;
  getAuditLogsForJob: (jobId: string) => AuditEntry[];
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export const useDashboardStore = create<DashboardStore>()(
  persist(
    (set, get) => ({
      jobs: MOCK_JOBS,
      candidates: MOCK_CANDIDATES,
      rubrics: MOCK_RUBRICS,
      evaluations: MOCK_EVALUATIONS,
      auditLogs: MOCK_AUDIT_LOGS,

      selectedJobId: null,
      selectedCandidateId: null,

      candidateFilters: {
        stage: 'all',
        search: '',
      },
      candidateSort: {
        field: 'score',
        direction: 'desc',
      },

      setSelectedJob: (jobId) => set({ selectedJobId: jobId }),
      setSelectedCandidate: (candidateId) => set({ selectedCandidateId: candidateId }),

      moveCandidate: (candidateId, newStage) => {
        const state = get();
        const candidate = state.candidates.find((c) => c.id === candidateId);
        if (!candidate) return;

        const oldStage = candidate.stage;

        set({
          candidates: state.candidates.map((c) =>
            c.id === candidateId
              ? { ...c, stage: newStage, updatedAt: new Date().toISOString() }
              : c
          ),
        });

        const actionMap: Record<CandidateStage, AuditEntry['action']> = {
          applied: 'candidate_moved',
          shortlisted: 'candidate_shortlisted',
          interview: 'candidate_interviewed',
          rejected: 'candidate_rejected',
        };

        get().addAuditEntry({
          jobId: candidate.jobId,
          candidateId,
          action: actionMap[newStage],
          description: `${candidate.name} moved from ${oldStage} to ${newStage}`,
          performedBy: 'Current User',
          metadata: { fromStage: oldStage, toStage: newStage },
        });
      },

      updateCandidate: (candidateId, updates) => {
        set((state) => ({
          candidates: state.candidates.map((c) =>
            c.id === candidateId
              ? { ...c, ...updates, updatedAt: new Date().toISOString() }
              : c
          ),
        }));
      },

      setCandidateFilters: (filters) =>
        set((state) => ({
          candidateFilters: { ...state.candidateFilters, ...filters },
        })),

      setCandidateSort: (sort) => set({ candidateSort: sort }),

      addCriterion: (jobId, criterion) => {
        set((state) => {
          const rubric = state.rubrics[jobId] || {
            jobId,
            criteria: [],
            totalWeight: 0,
            isValid: false,
          };

          const newCriterion: Criterion = {
            ...criterion,
            id: generateId(),
            order: rubric.criteria.length + 1,
          };

          const updatedCriteria = [...rubric.criteria, newCriterion];
          const totalWeight = updatedCriteria.reduce((sum, c) => sum + c.weight, 0);

          return {
            rubrics: {
              ...state.rubrics,
              [jobId]: {
                ...rubric,
                criteria: updatedCriteria,
                totalWeight,
                isValid: totalWeight === 100,
              },
            },
          };
        });

        get().addAuditEntry({
          jobId,
          action: 'rubric_updated',
          description: `Added new criterion: ${criterion.name}`,
          performedBy: 'Current User',
        });
      },

      updateCriterion: (jobId, criterionId, updates) => {
        set((state) => {
          const rubric = state.rubrics[jobId];
          if (!rubric) return state;

          const updatedCriteria = rubric.criteria.map((c) =>
            c.id === criterionId ? { ...c, ...updates } : c
          );
          const totalWeight = updatedCriteria.reduce((sum, c) => sum + c.weight, 0);

          return {
            rubrics: {
              ...state.rubrics,
              [jobId]: {
                ...rubric,
                criteria: updatedCriteria,
                totalWeight,
                isValid: totalWeight === 100,
              },
            },
          };
        });

        get().addAuditEntry({
          jobId,
          action: 'rubric_updated',
          description: `Updated criterion`,
          performedBy: 'Current User',
        });
      },

      deleteCriterion: (jobId, criterionId) => {
        set((state) => {
          const rubric = state.rubrics[jobId];
          if (!rubric) return state;

          const deletedCriterion = rubric.criteria.find((c) => c.id === criterionId);
          const updatedCriteria = rubric.criteria
            .filter((c) => c.id !== criterionId)
            .map((c, index) => ({ ...c, order: index + 1 }));
          const totalWeight = updatedCriteria.reduce((sum, c) => sum + c.weight, 0);

          if (deletedCriterion) {
            get().addAuditEntry({
              jobId,
              action: 'rubric_updated',
              description: `Deleted criterion: ${deletedCriterion.name}`,
              performedBy: 'Current User',
            });
          }

          return {
            rubrics: {
              ...state.rubrics,
              [jobId]: {
                ...rubric,
                criteria: updatedCriteria,
                totalWeight,
                isValid: totalWeight === 100,
              },
            },
          };
        });
      },

      reorderCriteria: (jobId, criteriaIds) => {
        set((state) => {
          const rubric = state.rubrics[jobId];
          if (!rubric) return state;

          const reorderedCriteria = criteriaIds
            .map((id, index) => {
              const criterion = rubric.criteria.find((c) => c.id === id);
              return criterion ? { ...criterion, order: index + 1 } : null;
            })
            .filter((c): c is Criterion => c !== null);

          return {
            rubrics: {
              ...state.rubrics,
              [jobId]: {
                ...rubric,
                criteria: reorderedCriteria,
              },
            },
          };
        });
      },

      addAuditEntry: (entry) => {
        const newEntry: AuditEntry = {
          ...entry,
          id: generateId(),
          timestamp: new Date().toISOString(),
        };

        set((state) => ({
          auditLogs: [newEntry, ...state.auditLogs],
        }));
      },

      getJobById: (jobId) => get().jobs.find((j) => j.id === jobId),

      getCandidateById: (candidateId) => get().candidates.find((c) => c.id === candidateId),

      getCandidatesForJob: (jobId) => get().candidates.filter((c) => c.jobId === jobId),

      getFilteredCandidates: (jobId) => {
        const state = get();
        let candidates = state.candidates.filter((c) => c.jobId === jobId);

        if (state.candidateFilters.stage && state.candidateFilters.stage !== 'all') {
          candidates = candidates.filter((c) => c.stage === state.candidateFilters.stage);
        }

        if (state.candidateFilters.search) {
          const search = state.candidateFilters.search.toLowerCase();
          candidates = candidates.filter(
            (c) =>
              c.name.toLowerCase().includes(search) ||
              c.email.toLowerCase().includes(search) ||
              c.skills.some((s) => s.toLowerCase().includes(search))
          );
        }

        const { field, direction } = state.candidateSort;
        candidates.sort((a, b) => {
          let comparison = 0;
          switch (field) {
            case 'score':
              comparison = a.score - b.score;
              break;
            case 'name':
              comparison = a.name.localeCompare(b.name);
              break;
            case 'date':
              comparison = new Date(a.appliedAt).getTime() - new Date(b.appliedAt).getTime();
              break;
          }
          return direction === 'desc' ? -comparison : comparison;
        });

        return candidates;
      },

      getRubricForJob: (jobId) => get().rubrics[jobId],

      getEvaluationForCandidate: (candidateId) => get().evaluations[candidateId],

      getAuditLogsForJob: (jobId) =>
        get()
          .auditLogs.filter((log) => log.jobId === jobId)
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()),
    }),
    {
      name: 'visiontact-dashboard-storage',
      partialize: (state) => ({
        rubrics: state.rubrics,
        candidateFilters: state.candidateFilters,
        candidateSort: state.candidateSort,
      }),
    }
  )
);
