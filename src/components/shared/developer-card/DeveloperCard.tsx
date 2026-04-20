import Image from "next/image";

import { Github, Linkedin, User } from "lucide-react";

import { Button } from "@/ui";

// ──────────────────────────────────────────────
// PROPS: Think of this like a backend DTO.
// It defines what data this component accepts.
// The "?" means the field is optional.
// ──────────────────────────────────────────────
type DeveloperCardProps = {
  name: string;
  role: string;
  skills: string[];
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

// ──────────────────────────────────────────────
// COMPONENT: A function that returns UI (JSX).
// - { ...props } is destructuring, same as backend
// - We pick out each prop by name
// ──────────────────────────────────────────────
export function DeveloperCard({
  name,
  role,
  skills,
  avatarUrl,
  githubUrl,
  linkedinUrl
}: DeveloperCardProps) {
  return (
    // TAILWIND CLASSES EXPLAINED:
    // w-full        = width 100%
    // max-w-sm      = max-width: 24rem (keeps card from getting too wide)
    // rounded-xl    = border-radius: extra large
    // border        = 1px border
    // bg-card       = background color from theme (supports dark mode!)
    // p-6           = padding: 1.5rem
    // shadow-sm     = small box-shadow
    <div className="w-full max-w-sm rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
      {/* ── AVATAR + NAME SECTION ── */}
      <div className="flex items-center gap-4">
        {/* Conditional rendering: show image if provided, fallback to icon */}
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <User className="h-8 w-8 text-primary" />
          </div>
        )}

        <div>
          {/* font-bold = bold text, text-xl = extra large */}
          <h3 className="text-xl font-bold">{name}</h3>
          {/* text-muted-foreground = gray/subtle color from theme */}
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      {/* my-4 = margin top & bottom 1rem, border-t = top border */}
      <div className="my-4 border-t" />

      {/* ── SKILLS SECTION ── */}
      <div>
        <p className="mb-2 text-sm font-medium text-muted-foreground">Tech Stack</p>
        {/* flex-wrap = items wrap to next line if not enough space */}
        <div className="flex flex-wrap gap-2">
          {/* .map() = same as backend, iterate over array.
              key is REQUIRED in React lists — like a unique ID in a DB row */}
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ── SOCIAL LINKS ── */}
      {/* && is conditional rendering: only show if URL exists */}
      {(githubUrl || linkedinUrl) && (
        <>
          <div className="my-4 border-t" />
          <div className="flex gap-2">
            {githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {linkedinUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
