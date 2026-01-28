'use client';

import { generateResumePreview } from '../../lib/utils';
import { FileTextIcon } from '../ui/Icons';

interface ResumePreviewProps {
  candidateName: string;
}

export function ResumePreview({ candidateName }: ResumePreviewProps) {
  const resumeContent = generateResumePreview();

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center">
            <FileTextIcon size={18} className="text-[var(--text-muted)]" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--text-primary)]">Resume</h3>
            <p className="text-xs text-[var(--text-muted)]">{candidateName}_resume.pdf</p>
          </div>
        </div>
        <button className="btn btn-secondary h-8 text-xs">
          Download
        </button>
      </div>

      {/* Preview */}
      <div className="p-6 bg-[var(--bg-tertiary)] max-h-96 overflow-y-auto">
        <pre className="text-xs text-[var(--text-secondary)] font-mono whitespace-pre-wrap leading-relaxed">
          {resumeContent}
        </pre>
      </div>
    </div>
  );
}
