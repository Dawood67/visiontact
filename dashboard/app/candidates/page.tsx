"use client";

import { useState } from "react";
import Link from "next/link";
import { useDashboardStore } from "../lib/store";
import { STAGE_CONFIG, SORT_OPTIONS } from "../lib/constants";
import {
  parseSortValue,
  formatDate,
  getInitials,
  getScoreColor,
} from "../lib/utils";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { Header } from "../components/layout/Header";
import {
  SearchIcon,
  FilterIcon,
  ChevronRightIcon,
} from "../components/ui/Icons";
import type {
  CandidateStage,
  CandidateSortField,
  SortDirection,
} from "../lib/types";

export default function AllCandidatesPage() {
  const { candidates, jobs } = useDashboardStore();
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState<CandidateStage | "all">("all");
  const [sort, setSort] = useState<{
    field: CandidateSortField;
    direction: SortDirection;
  }>({
    field: "date",
    direction: "desc",
  });

  let filteredCandidates = [...candidates];

  if (search) {
    const searchLower = search.toLowerCase();
    filteredCandidates = filteredCandidates.filter(
      (c) =>
        c.name.toLowerCase().includes(searchLower) ||
        c.email.toLowerCase().includes(searchLower) ||
        c.skills.some((s) => s.toLowerCase().includes(searchLower)),
    );
  }

  if (stageFilter !== "all") {
    filteredCandidates = filteredCandidates.filter(
      (c) => c.stage === stageFilter,
    );
  }

  filteredCandidates.sort((a, b) => {
    let comparison = 0;
    switch (sort.field) {
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
    return sort.direction === "desc" ? -comparison : comparison;
  });

  const getJobTitle = (jobId: string) => {
    const job = jobs.find((j) => j.id === jobId);
    return job?.title || "Unknown Position";
  };

  return (
    <DashboardLayout>
      <Header
        title="All Candidates"
        subtitle={`${candidates.length} total candidates across all jobs`}
      />

      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            {/* <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              size={16}
            /> */}
            <input
              type="text"
              placeholder="Search by name, email, or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input pl-9 h-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <FilterIcon size={16} className="text-[var(--text-muted)]" />
            <select
              value={stageFilter}
              onChange={(e) =>
                setStageFilter(e.target.value as CandidateStage | "all")
              }
              className="select h-10 w-36"
            >
              <option value="all">All Stages</option>
              {Object.entries(STAGE_CONFIG).map(([value, config]) => (
                <option key={value} value={value}>
                  {config.label}
                </option>
              ))}
            </select>

            <select
              value={`${sort.field}-${sort.direction}`}
              onChange={(e) => setSort(parseSortValue(e.target.value))}
              className="select h-10 w-40"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl overflow-hidden">
          <table className="table">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Position</th>
                <th>Stage</th>
                <th>Score</th>
                <th>Applied</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <p className="text-[var(--text-muted)]">
                      No candidates found
                    </p>
                  </td>
                </tr>
              ) : (
                filteredCandidates.map((candidate) => {
                  const stageConfig = STAGE_CONFIG[candidate.stage];
                  const scoreColorClass = getScoreColor(candidate.score);

                  return (
                    <tr key={candidate.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar avatar-sm">
                            {getInitials(candidate.name)}
                          </div>
                          <div>
                            <p className="font-medium text-[var(--text-primary)]">
                              {candidate.name}
                            </p>
                            <p className="text-xs text-[var(--text-muted)]">
                              {candidate.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm">
                          {getJobTitle(candidate.jobId)}
                        </p>
                      </td>
                      <td>
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${stageConfig.bgClass}`}
                        >
                          {stageConfig.label}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`font-semibold tabular-nums ${scoreColorClass}`}
                        >
                          {candidate.score}
                        </span>
                      </td>
                      <td>
                        <span className="text-sm">
                          {formatDate(candidate.appliedAt)}
                        </span>
                      </td>
                      <td>
                        <Link
                          href={`/jobs/${candidate.jobId}/candidates/${candidate.id}`}
                          className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] inline-block"
                        >
                          <ChevronRightIcon size={16} />
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
