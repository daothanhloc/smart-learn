import { DeveloperCard } from "@/components/shared";
import { Dashboard, FeaturesList, Showcase } from "@/features/landing";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center pb-40">
      {/* ── Your first component! ── */}
      <DeveloperCard
        name="Loc Dao"
        role="Backend Engineer → Fullstack"
        skills={[
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Docker",
          "Next.js",
          "React",
          "Tailwind CSS"
        ]}
        githubUrl="https://github.com"
      />

      <Dashboard />
      <FeaturesList />
      <Showcase />
    </section>
  );
}
