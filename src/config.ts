export const SHAREPOINT_SITE_URL: string =
  (window as any).__SP_SITE_URL__ ||
  process.env.REACT_APP_SHAREPOINT_SITE_URL ||
  "";
