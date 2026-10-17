// Every Sign in / Sign up button points at the OmniCat app. It defaults to the
// staging app so the buttons work out of the box, including under `astro dev`.
// To test against an app running on your machine, set PUBLIC_OMNICAT_APP_URL in
// a local .env file (see .env.example), e.g. PUBLIC_OMNICAT_APP_URL=http://localhost:5173
const defaultAppUrl = "https://omnicat.stg.valumatix.com";

const appUrl = (import.meta.env.PUBLIC_OMNICAT_APP_URL || defaultAppUrl).replace(/\/$/, "");

export const appLinks = {
  home: `${appUrl}/`,
  login: `${appUrl}/login`,
  signup: `${appUrl}/register`,
} as const;
