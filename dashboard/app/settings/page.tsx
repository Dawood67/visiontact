'use client';

import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Header } from '../components/layout/Header';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <Header title="Settings" subtitle="Manage your workspace preferences" />

      <div className="p-8 max-w-3xl">
        {/* Profile section */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 mb-6">
          <h3 className="font-medium text-[var(--text-primary)] mb-6">Profile</h3>

          <div className="flex items-start gap-6 mb-6">
            <div className="avatar avatar-lg bg-[var(--accent)]">
              <span className="text-[var(--text-primary)]">AM</span>
            </div>
            <div className="flex-1">
              <button className="btn btn-secondary text-sm">Change Avatar</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Full Name
              </label>
              <input type="text" defaultValue="Alex Morgan" className="input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Email
              </label>
              <input
                type="email"
                defaultValue="alex.morgan@visiontact.com"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Role
              </label>
              <input type="text" defaultValue="Senior Recruiter" className="input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Department
              </label>
              <input type="text" defaultValue="Talent Acquisition" className="input" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 mb-6">
          <h3 className="font-medium text-[var(--text-primary)] mb-6">Notifications</h3>

          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  New Applications
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Get notified when a new candidate applies
                </p>
              </div>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>

            <div className="divider-solid" />

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  AI Evaluations
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Get notified when AI evaluation is ready
                </p>
              </div>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>

            <div className="divider-solid" />

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  Interview Reminders
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Remind me before scheduled interviews
                </p>
              </div>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>

            <div className="divider-solid" />

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  Weekly Summary
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Receive weekly recruitment metrics
                </p>
              </div>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 mb-6">
          <h3 className="font-medium text-[var(--text-primary)] mb-6">Preferences</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Default Pipeline View
              </label>
              <select className="select w-full max-w-xs">
                <option>Kanban Board</option>
                <option>List View</option>
                <option>Table View</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Date Format
              </label>
              <select className="select w-full max-w-xs">
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Timezone
              </label>
              <select className="select w-full max-w-xs">
                <option>America/Los_Angeles (PST)</option>
                <option>America/New_York (EST)</option>
                <option>Europe/London (GMT)</option>
                <option>Asia/Dubai (GST)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end gap-3">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
