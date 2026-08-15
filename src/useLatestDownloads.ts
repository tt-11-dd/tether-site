import { useEffect, useState } from "react";
import { DOWNLOADS_FALLBACK, loadLatestDownloads, type ReleaseDownloads } from "./downloads";

/** Shared cache — every caller sees the same latest release. */
export function useLatestDownloads(): ReleaseDownloads {
  const [downloads, setDownloads] = useState(DOWNLOADS_FALLBACK);
  useEffect(() => {
    let alive = true;
    void loadLatestDownloads().then((next) => {
      if (alive) setDownloads(next);
    });
    return () => {
      alive = false;
    };
  }, []);
  return downloads;
}
