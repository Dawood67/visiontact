'use client';

import { useDashboardStore } from '../lib/store';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Header } from '../components/layout/Header';
import { STAGE_CONFIG } from '../lib/constants';

export default function AnalyticsPage() {
  const { jobs, candidates } = useDashboardStore();

  // Calculate metrics
  const totalCandidates = candidates.length;
  const activeJobs = jobs.filter((j) => j.status === 'active').length;

  // Stage distribution
  const stageDistribution = Object.entries(STAGE_CONFIG).map(([stage, config]) => ({
    stage,
    label: config.label,
    color: config.color,
    count: candidates.filter((c) => c.stage === stage).length,
  }));

  // Average score by stage
  const averageScores = Object.entries(STAGE_CONFIG).map(([stage, config]) => {
    const stageCandidates = candidates.filter((c) => c.stage === stage);
    const avgScore =
      stageCandidates.length > 0
        ? Math.round(
            stageCandidates.reduce((sum, c) => sum + c.score, 0) / stageCandidates.length
          )
        : 0;
    return {
      stage,
      label: config.label,
      color: config.color,
      avgScore,
    };
  });

  // Top skills across all candidates
  const skillCounts = candidates.reduce(
    (acc, c) => {
      c.skills.forEach((skill) => {
        acc[skill] = (acc[skill] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>
  );

  const topSkills = Object.entries(skillCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <DashboardLayout>
      <Header title="Analytics" subtitle="Recruitment metrics and insights" />

      <div className="p-8">
        {/* Overview cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <p className="text-sm text-[var(--text-muted)] mb-2">Total Candidates</p>
            <p className="text-3xl font-bold text-[var(--text-primary)] tabular-nums">
              {totalCandidates}
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <p className="text-sm text-[var(--text-muted)] mb-2">Active Jobs</p>
            <p className="text-3xl font-bold text-[var(--text-primary)] tabular-nums">
              {activeJobs}
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <p className="text-sm text-[var(--text-muted)] mb-2">Interview Rate</p>
            <p className="text-3xl font-bold text-[var(--accent)] tabular-nums">
              {totalCandidates > 0
                ? Math.round(
                    (candidates.filter((c) => c.stage === 'interview').length / totalCandidates) *
                      100
                  )
                : 0}
              %
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <p className="text-sm text-[var(--text-muted)] mb-2">Avg Score</p>
            <p className="text-3xl font-bold text-[var(--text-primary)] tabular-nums">
              {totalCandidates > 0
                ? Math.round(candidates.reduce((sum, c) => sum + c.score, 0) / totalCandidates)
                : 0}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Stage distribution */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-medium text-[var(--text-primary)] mb-6">
              Candidates by Stage
            </h3>
            <div className="space-y-4">
              {stageDistribution.map((item) => (
                <div key={item.stage}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
                    <span className="text-sm font-medium text-[var(--text-primary)] tabular-nums">
                      {item.count}
                    </span>
                  </div>
                  <div className="progress-bar h-2">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${totalCandidates > 0 ? (item.count / totalCandidates) * 100 : 0}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Average score by stage */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-medium text-[var(--text-primary)] mb-6">
              Average Score by Stage
            </h3>
            <div className="space-y-4">
              {averageScores.map((item) => (
                <div key={item.stage}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
                    <span
                      className="text-sm font-semibold tabular-nums"
                      style={{ color: item.color }}
                    >
                      {item.avgScore}
                    </span>
                  </div>
                  <div className="progress-bar h-2">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.avgScore}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top skills */}
          <div className="col-span-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-medium text-[var(--text-primary)] mb-6">
              Most Common Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {topSkills.map(([skill, count]) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg"
                >
                  <span className="text-sm text-[var(--text-secondary)]">{skill}</span>
                  <span className="text-xs font-medium text-[var(--accent)] bg-[rgba(199,93,58,0.15)] px-1.5 py-0.5 rounded">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
