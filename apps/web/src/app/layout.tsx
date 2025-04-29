import "@packages/styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "딸기 퀘스트",
  description: "달콤한 딸기, 내 주변 핫한 카페에서",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body>{children}</body>
    </html>
  );
}
