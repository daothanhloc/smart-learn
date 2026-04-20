import Cookies from "js-cookie";

const TOKEN_KEY = "auth_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const TOKEN_EXPIRY_DAYS = 7;
const REFRESH_TOKEN_EXPIRY_DAYS = 30;

export const authToken = {
  get: (): string | undefined => Cookies.get(TOKEN_KEY),

  set: (token: string) => {
    Cookies.set(TOKEN_KEY, token, {
      expires: TOKEN_EXPIRY_DAYS,
      sameSite: "lax"
    });
  },

  remove: () => {
    Cookies.remove(TOKEN_KEY);
  }
};

export const refreshToken = {
  get: (): string | undefined => Cookies.get(REFRESH_TOKEN_KEY),

  set: (token: string) => {
    Cookies.set(REFRESH_TOKEN_KEY, token, {
      expires: REFRESH_TOKEN_EXPIRY_DAYS,
      sameSite: "lax"
    });
  },

  remove: () => {
    Cookies.remove(REFRESH_TOKEN_KEY);
  }
};
