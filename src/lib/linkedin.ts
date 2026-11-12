/** LinkedIn kit formats (CSS pixels), shared by the templates and the script. */
export const LINKEDIN_ASSETS = {
  banner: { width: 1584, height: 396 },
  photo: { width: 400, height: 400 },
  apps: { width: 1200, height: 627 },
  missions: { width: 1200, height: 627 },
  post: { width: 1080, height: 1350 },
} as const;

export type LinkedinAsset = keyof typeof LINKEDIN_ASSETS;
