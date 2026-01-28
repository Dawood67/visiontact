'use client';

import { useDashboardStore } from '../../lib/store';
import { AuditEntry } from './AuditEntry';
import { EmptyInboxIcon } from '../ui/Icons';

interface AuditLogProps {
  jobId: string;
}

export function AuditLog({ jobId }: AuditLogProps) {
  const { getAuditLogsForJob } = useDashboardStore();
  const logs = getAuditLogsForJob(jobId);

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-medium text-[var(--text-primary)] mb-1">
          Activity Log
        </h3>
        <p className="text-sm text-[var(--text-muted)]">
          Complete audit trail of all actions taken for this job posting.
        </p>
      </div>

      <div className="flex items-center gap-2 p-3 bg-[rgba(199,93,58,0.1)] border border-[rgba(199,93,58,0.3)] rounded-lg mb-6">
        <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
        <span className="text-xs font-medium text-[var(--accent-light)]">
          Trust-Critical: All actions are logged and immutable
        </span>
      </div>

      {logs.length === 0 ? (
        <div className="empty-state py-12 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
          <EmptyInboxIcon className="empty-state-icon" />
          <h4 className="empty-state-title">No activity yet</h4>
          <p className="empty-state-description">
            Actions taken on candidates and this job will appear here.
          </p>
        </div>
      ) : (
        <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
          <div className="divide-y divide-[var(--border)]">
            {logs.map((log) => (
              <div key={log.id} className="px-4">
                <AuditEntry entry={log} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
