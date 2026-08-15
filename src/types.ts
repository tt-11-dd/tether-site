export type Language = "zh" | "en";

export interface DownloadItem {
  id: string;
  os: "mac" | "win";
  name: string;
  arch: string;
  badge?: string;
  filename: string;
  size: string;
  url: string;
  recommended?: boolean;
}

export interface FeatureItem {
  icon: string;
  title: string;
  badge?: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
