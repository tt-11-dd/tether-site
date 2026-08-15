import pkg from "../package.json";

/** Keep in sync with tether-site/package.json — bump that version to retarget GitHub Release assets. */
export const APP_VERSION = pkg.version;
export const RELEASE_TAG = `v${APP_VERSION}`;

export const MAC_ARM_FILE = `Tether-${APP_VERSION}-arm64.dmg`;
export const WIN_FILE = `Tether-Setup-${APP_VERSION}.exe`;

const assetBase = `https://github.com/tt-11-dd/tether-ai/releases/download/${RELEASE_TAG}`;

export const DOWNLOADS = {
  macArm: `${assetBase}/${MAC_ARM_FILE}`,
  win: `${assetBase}/${WIN_FILE}`,
  page: `https://github.com/tt-11-dd/tether-ai/releases/tag/${RELEASE_TAG}`,
  all: "https://github.com/tt-11-dd/tether-ai/releases",
} as const;
