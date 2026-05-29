import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "行動雲端力研習｜Notion 起手式",
  description: "2026.06.02 線上 ‧ 大乃老師帶公務人員從零開始用 Notion 管業務",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
