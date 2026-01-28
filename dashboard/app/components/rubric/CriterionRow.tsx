'use client';

import { useState } from 'react';
import type { Criterion } from '../../lib/types';
import { EditIcon, TrashIcon, GripVerticalIcon, CheckIcon, XIcon } from '../ui/Icons';

interface CriterionRowProps {
  criterion: Criterion;
  onUpdate: (updates: Partial<Criterion>) => void;
  onDelete: () => void;
}

export function CriterionRow({ criterion, onUpdate, onDelete }: CriterionRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(criterion.name);
  const [editDescription, setEditDescription] = useState(criterion.description);
  const [editWeight, setEditWeight] = useState(criterion.weight.toString());

  const handleSave = () => {
    const weight = parseInt(editWeight, 10);
    if (isNaN(weight) || weight < 0 || weight > 100) return;

    onUpdate({
      name: editName,
      description: editDescription,
      weight,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(criterion.name);
    setEditDescription(criterion.description);
    setEditWeight(criterion.weight.toString());
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--border-hover)] rounded-lg">
        <div className="grid grid-cols-[1fr,1fr,80px] gap-4 mb-3">
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Criterion name"
            className="input h-9 text-sm"
          />
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description"
            className="input h-9 text-sm"
          />
          <div className="relative">
            <input
              type="number"
              value={editWeight}
              onChange={(e) => setEditWeight(e.target.value)}
              min={0}
              max={100}
              className="input h-9 text-sm pr-6"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]">
              %
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={handleCancel} className="btn btn-ghost h-8 text-xs">
            <XIcon size={14} />
            Cancel
          </button>
          <button onClick={handleSave} className="btn btn-primary h-8 text-xs">
            <CheckIcon size={14} />
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg group">
      {/* Drag handle */}
      <button className="text-[var(--text-muted)] cursor-grab opacity-0 group-hover:opacity-100">
        <GripVerticalIcon size={16} />
      </button>

      {/* Content */}
      <div className="flex-1 grid grid-cols-[1fr,1fr,80px] gap-4 items-center">
        <div>
          <h4 className="text-sm font-medium text-[var(--text-primary)]">
            {criterion.name}
          </h4>
        </div>
        <p className="text-sm text-[var(--text-muted)] truncate">
          {criterion.description}
        </p>
        <div className="text-right">
          <span className="text-sm font-semibold text-[var(--accent)] tabular-nums">
            {criterion.weight}%
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] rounded"
        >
          <EditIcon size={14} />
        </button>
        <button
          onClick={onDelete}
          className="p-1.5 text-[var(--text-muted)] hover:text-[#D47A7A] hover:bg-[rgba(199,93,93,0.1)] rounded"
        >
          <TrashIcon size={14} />
        </button>
      </div>
    </div>
  );
}
