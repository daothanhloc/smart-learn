import { LoginForm } from "@/features/auth/components/login-form";

// Server Component — just composes other components.
// The layout already provides the sidebar. This page only provides the right panel.
export default function LoginPage() {
  return <LoginForm />;
}
