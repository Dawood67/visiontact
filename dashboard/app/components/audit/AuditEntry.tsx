"use client";

import type { AuditEntry as AuditEntryType } from "../../lib/types";
import { AUDIT_ACTION_CONFIG } from "../../lib/constants";
import { formatDateTime } from "../../lib/utils";
import {
  UserPlusIcon,
  ArrowRightIcon,
  XCircleIcon,
  StarIcon,
  CalendarIcon,
  CpuIcon,
  SlidersIcon,
  PlusCircleIcon,
  EditIcon,
  MessageSquareIcon,
} from "../ui/Icons";

const iconMap = {
  "user-plus": UserPlusIcon,
  "arrow-right": ArrowRightIcon,
  "x-circle": XCircleIcon,
  star: StarIcon,
  calendar: CalendarIcon,
  cpu: CpuIcon,
  sliders: SlidersIcon,
  "plus-circle": PlusCircleIcon,
  edit: EditIcon,
  "message-square": MessageSquareIcon,
};

interface AuditEntryProps {
  entry: AuditEntryType;
}

export function AuditEntry({ entry }: AuditEntryProps) {
  const config = AUDIT_ACTION_CONFIG[entry.action];
  const IconComponent =
    iconMap[config.icon as keyof typeof iconMap] || ArrowRightIcon;

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-3 sm:py-4">
      <div className="flex gap-3 sm:gap-4 flex-1 min-w-0">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${config.color}20` }}
        >
          <IconComponent size={14} style={{ color: config.color }} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[var(--text-primary)]">
            {entry.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 text-xs text-[var(--text-muted)]">
            <span>{entry.performedBy}</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>{formatDateTime(entry.timestamp)}</span>
          </div>
        </div>
      </div>

      {/* Badge */}
      <span
        className="flex-shrink-0 self-start sm:self-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium rounded-full ml-11 sm:ml-0"
        style={{
          backgroundColor: `${config.color}15`,
          color: config.color,
        }}
      >
        {config.label}
      </span>
    </div>
  );
}
