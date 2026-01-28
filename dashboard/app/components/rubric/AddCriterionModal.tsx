'use client';

import { useState } from 'react';
import { XIcon } from '../ui/Icons';

interface AddCriterionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (criterion: { name: string; description: string; weight: number; jobId: string }) => void;
  jobId: string;
  remainingWeight: number;
}

export function AddCriterionModal({
  isOpen,
  onClose,
  onAdd,
  jobId,
  remainingWeight,
}: AddCriterionModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseInt(weight, 10);
    if (!name || isNaN(weightNum) || weightNum <= 0) return;

    onAdd({
      name,
      description,
      weight: weightNum,
      jobId,
    });

    // Reset form
    setName('');
    setDescription('');
    setWeight('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <h2 className="font-serif text-lg font-semibold text-[var(--text-primary)]">
            Add Criterion
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <XIcon size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
              Criterion Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Technical Skills"
              className="input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of what this criterion measures"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
              Weight (%)
            </label>
            <div className="relative">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                min={1}
                max={100}
                className="input pr-8"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--text-muted)]">
                %
              </span>
            </div>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Remaining weight available: {remainingWeight}%
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Criterion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
