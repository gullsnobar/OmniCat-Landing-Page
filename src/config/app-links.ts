const defaultAppUrl = import.meta.env.DEV
  ? "https://localhost:5173"
  : "https://omnicat.stg.valumatix.com";

const appUrl = (import.meta.env.PUBLIC_OMNICAT_APP_URL || defaultAppUrl).replace(/\/$/, "");

export const appLinks = {
  home: `${appUrl}/`,
  login: `${appUrl}/login`,
  signup: `${appUrl}/register`,
} as const;
