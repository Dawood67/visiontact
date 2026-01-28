'use client';

interface SkillsTagsProps {
  skills: string[];
}

export function SkillsTags({ skills }: SkillsTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="tag">
          {skill}
        </span>
      ))}
    </div>
  );
}
