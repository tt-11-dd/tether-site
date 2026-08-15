export type ReleaseDownloads = {
  tag: string;
  macArm: string;
  win: string;
  macArmFile: string;
  winFile: string;
  page: string;
  all: string;
};

const REPO = "tt-11-dd/tether-ai";
const ALL = `https://github.com/${REPO}/releases`;
const LATEST_PAGE = `${ALL}/latest`;

/** Shown until GitHub responds — CTAs go to the latest release page. */
export const DOWNLOADS_FALLBACK: ReleaseDownloads = {
  tag: "",
  macArm: LATEST_PAGE,
  win: LATEST_PAGE,
  macArmFile: "Tether-*-arm64.dmg",
  winFile: "Tether-Setup-*.exe",
  page: LATEST_PAGE,
  all: ALL,
};

type GithubAsset = { name?: string; browser_download_url?: string };
type GithubRelease = { tag_name?: string; assets?: GithubAsset[] };

export function parseGithubRelease(data: GithubRelease): ReleaseDownloads | null {
  const tag = typeof data.tag_name === "string" ? data.tag_name.trim() : "";
  if (!tag) return null;
  const assets = Array.isArray(data.assets) ? data.assets : [];
  const mac = assets.find((item) => typeof item.name === "string" && /-arm64\.dmg$/i.test(item.name));
  const win = assets.find((item) => typeof item.name === "string" && /\.exe$/i.test(item.name));
  if (!mac?.name || !mac.browser_download_url || !win?.name || !win.browser_download_url) return null;
  return {
    tag,
    macArm: mac.browser_download_url,
    win: win.browser_download_url,
    macArmFile: mac.name,
    winFile: win.name,
    page: `https://github.com/${REPO}/releases/tag/${tag}`,
    all: ALL,
  };
}

let pending: Promise<ReleaseDownloads> | undefined;

export function loadLatestDownloads(): Promise<ReleaseDownloads> {
  if (!pending) {
    pending = fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`GitHub ${response.status}`);
        const parsed = parseGithubRelease((await response.json()) as GithubRelease);
        if (!parsed) throw new Error("Release assets missing");
        return parsed;
      })
      .catch(() => DOWNLOADS_FALLBACK);
  }
  return pending;
}
