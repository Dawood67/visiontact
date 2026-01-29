"use client";

import { useDashboardStore } from "../../lib/store";
import { STAGE_ORDER, SORT_OPTIONS } from "../../lib/constants";
import { parseSortValue } from "../../lib/utils";
import { StageColumn } from "./StageColumn";
import { SearchIcon, FilterIcon } from "../ui/Icons";
import type { CandidateStage } from "../../lib/types";

interface CandidatePipelineProps {
  jobId: string;
}

export function CandidatePipeline({ jobId }: CandidatePipelineProps) {
  const {
    getCandidatesForJob,
    moveCandidate,
    candidateFilters,
    candidateSort,
    setCandidateFilters,
    setCandidateSort,
  } = useDashboardStore();

  const allCandidates = getCandidatesForJob(jobId);

  const candidatesByStage = STAGE_ORDER.reduce(
    (acc, stage) => {
      let candidates = allCandidates.filter((c) => c.stage === stage);

      if (candidateFilters.search) {
        const search = candidateFilters.search.toLowerCase();
        candidates = candidates.filter(
          (c) =>
            c.name.toLowerCase().includes(search) ||
            c.email.toLowerCase().includes(search) ||
            c.skills.some((s) => s.toLowerCase().includes(search)),
        );
      }

      const { field, direction } = candidateSort;
      candidates.sort((a, b) => {
        let comparison = 0;
        switch (field) {
          case "score":
            comparison = a.score - b.score;
            break;
          case "name":
            comparison = a.name.localeCompare(b.name);
            break;
          case "date":
            comparison =
              new Date(a.appliedAt).getTime() - new Date(b.appliedAt).getTime();
            break;
        }
        return direction === "desc" ? -comparison : comparison;
      });

      acc[stage] = candidates;
      return acc;
    },
    {} as Record<CandidateStage, typeof allCandidates>,
  );

  const handleDrop = (candidateId: string, newStage: CandidateStage) => {
    moveCandidate(candidateId, newStage);
  };

  const currentSortValue = `${candidateSort.field}-${candidateSort.direction}`;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search candidates..."
            value={candidateFilters.search || ""}
            onChange={(e) => setCandidateFilters({ search: e.target.value })}
            className="input pl-9 h-9 text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <FilterIcon size={16} className="text-[var(--text-muted)]" />
          <select
            value={currentSortValue}
            onChange={(e) => setCandidateSort(parseSortValue(e.target.value))}
            className="select h-10 text-sm w-40"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGE_ORDER.map((stage) => (
          <StageColumn
            key={stage}
            stage={stage}
            candidates={candidatesByStage[stage]}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
}
