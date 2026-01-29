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
      <div className="p-3 sm:p-4 border-b border-[var(--border)] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0">
            <FileTextIcon size={16} className="text-[var(--text-muted)] sm:hidden" />
            <FileTextIcon size={18} className="text-[var(--text-muted)] hidden sm:block" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-[var(--text-primary)]">Resume</h3>
            <p className="text-xs text-[var(--text-muted)] truncate">{candidateName}_resume.pdf</p>
          </div>
        </div>
        <button className="btn btn-secondary h-8 text-xs flex-shrink-0">
          Download
        </button>
      </div>

      <div className="p-4 sm:p-6 bg-[var(--bg-tertiary)] max-h-72 sm:max-h-96 overflow-y-auto">
        <pre className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-mono whitespace-pre-wrap leading-relaxed">
          {resumeContent}
        </pre>
      </div>
    </div>
  );
}
