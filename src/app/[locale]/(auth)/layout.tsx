import { Metadata } from "next";

import { AuthSidebar } from "@/features/auth/components/auth-sidebar";

export const metadata: Metadata = {
  title: "Smart Learn - Auth",
  description: "Login or register to Smart Learn"
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-12">
      <AuthSidebar
        title="SmartLearn"
        description="Enter your intellectual atelier. A curated space for modern scholars and lifelong learners."
      />
      {children}
    </div>
  );
}
