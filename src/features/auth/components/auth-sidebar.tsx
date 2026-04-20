import Image from "next/image";

type AuthSidebarProps = {
  title: string;
  description: string;
};

export function AuthSidebar({ title, description }: AuthSidebarProps) {
  return (
    <aside className="relative hidden flex-col justify-between overflow-hidden p-16 lg:col-span-5 lg:flex">
      {/* Purple gradient background — Tailwind can't do arbitrary gradients, so inline style */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #241da0 0%, #3d3bb7 100%)" }}
      />

      {/* Background image with 20% opacity overlay */}
      {/* In production, replace this placeholder with your actual image */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/nice-avatar.png" alt="" fill className="object-cover mix-blend-overlay" />
      </div>

      {/* ── TOP SECTION: Logo + Description ── */}
      <div className="relative z-10">
        <h1 className="mb-4 text-4xl font-black tracking-tighter text-white">{title}</h1>
        <p className="max-w-sm text-lg leading-relaxed font-medium text-white/80">{description}</p>
      </div>

      {/* ── BOTTOM SECTION: Social proof + Testimonial ── */}
      <div className="relative z-10">
        {/* Avatar stack: overlapping circles */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex -space-x-3">
            {/* Placeholder avatars — replace with real images later */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/20 text-xs font-bold text-white">
              A
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/20 text-xs font-bold text-white">
              B
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/20 text-xs font-bold text-white">
              C
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/20 text-xs font-bold text-white">
              +2k
            </div>
          </div>
          <span className="text-sm text-white/80">Join 2,400+ scholars worldwide</span>
        </div>

        {/* Testimonial blockquote */}
        <blockquote className="border-l-2 border-yellow-400 pl-6">
          <p className="text-lg leading-snug font-medium text-white/90 italic">
            &ldquo;The transition from standard LMS to this atelier changed how I perceive my own
            growth.&rdquo;
          </p>
          <footer className="mt-4 text-sm tracking-widest text-yellow-400 uppercase">
            Dr. Elena Vance, Senior Researcher
          </footer>
        </blockquote>
      </div>
    </aside>
  );
}
