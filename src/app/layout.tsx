import "./globals.css";
import { User as UserIcon, Bell, Search } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PTマッチング | 理学療法士を探せるサービス",
  description: "福岡で自分に合った理学療法士を見つけて予約できるサービスです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className="bg-[#FBFBFC] text-slate-900 antialiased min-h-screen flex flex-col items-center"
        style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex justify-center">
          <div className="w-full max-w-6xl flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5">
              <span className="font-black text-2xl tracking-tight text-slate-900">PTマッチング</span>
            </Link>

            {/* PC Search — onClick を Link に置き換え */}
            <Link
              href="/search"
              className="hidden lg:flex items-center gap-6 px-6 py-2 border border-slate-200 rounded-full bg-white hover:bg-slate-50 transition cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400">検索</span>
                <span className="text-[12px] font-medium text-slate-700">症状から探す</span>
              </div>
              <div className="w-px h-6 bg-slate-100" />
              <div className="flex flex-col pr-4">
                <span className="text-[10px] text-slate-400">エリア</span>
                <span className="text-[12px] font-medium text-slate-700">福岡市内</span>
              </div>
              <div className="bg-blue-600 p-2 rounded-full text-white">
                <Search size={16} strokeWidth={2.5} />
              </div>
            </Link>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-blue-600">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>

              <Link
                href="/mypage"
                className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                <UserIcon size={18} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="w-full flex justify-center pt-28 pb-32 px-6">
          <div className="w-full max-w-5xl">{children}</div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-slate-200 py-12 flex justify-center mt-auto">
          <div className="w-full max-w-6xl px-6 flex flex-col gap-10">

            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="space-y-3">
                <Link href="/" className="text-xl font-bold text-slate-900">
                  PTマッチング
                </Link>
                <p className="text-xs text-slate-500">
                  福岡で理学療法士を探して予約できるサービスです。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 text-sm">
                <div className="space-y-3">
                  <p className="text-slate-900 font-semibold text-xs">サービス</p>
                  <div className="flex flex-col gap-2 text-slate-500">
                    <Link href="/search" className="hover:text-blue-600">検索</Link>
                    <Link href="/request" className="hover:text-blue-600">相談依頼</Link>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-slate-900 font-semibold text-xs">運営情報</p>
                  <div className="flex flex-col gap-2 text-slate-500">
                    <Link href="#" className="hover:text-blue-600">プライバシー</Link>
                    <Link href="#" className="hover:text-blue-600">利用規約</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6 text-xs text-slate-400 flex justify-between">
              <p>© 2026 PT Matching</p>
              <p>システム稼働状況：正常</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


