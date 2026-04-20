import { post } from "@/lib/api";

import type { LoginFormValues } from "@/features/auth/schemas/login.schema";
import type { RegisterFormValues } from "@/features/auth/schemas/register.schema";

export type AuthResponse = {
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
    profile: {
      id: string;
      fullName: string;
      dob: string;
    };
  };
  timestamp: string;
  path: string;
  method: string;
};

export const authApi = {
  login: (data: LoginFormValues) => post<AuthResponse>("/v1/auth/login", data),
  register: (data: RegisterFormValues) => post<AuthResponse>("/v1/auth/register", data)
};
