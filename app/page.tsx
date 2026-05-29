import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="text-warm-accentDark font-bold mb-3 tracking-widest">行動雲端力研習</p>
      <h1 className="brush-title text-5xl mb-6 text-warm-accentDark">Notion 起手式</h1>
      <p className="text-lg text-warm-muted mb-3">
        從零開始，用一個工具把散落的業務、交辦、會議、交接全部收進來
      </p>
      <p className="text-sm text-warm-muted mb-12">
        2026.06.02（二）線上分享 ‧ 給公務人員的最初階 Notion
      </p>
      <Link href="/share/notion-qishi-20260602" className="ribbon text-base">
        進入投影片 ‧ 行動雲端力研習｜Notion 起手式
      </Link>
      <p className="text-xs text-warm-muted mt-10">
        陳乃誠（大乃老師）‧ 竹光國中國文教師＋資訊組長
      </p>
    </main>
  );
}
