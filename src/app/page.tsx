import { useRouter } from "next/navigation";
import { Search, ArrowRight, PlusCircle, User } from "lucide-react";

export default function StartPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-50">

      <main className="w-full flex flex-col items-center py-16">

        {/* メインタイトル（シンプル・医療系の信頼感） */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            理学療法士をもっと身近に
          </h1>
          <p className="text-sm text-slate-500">
            福岡で、自分に合った理学療法士を探して予約できるサービスです。
          </p>
        </div>

        {/* 検索バー（シンプル版） */}
        <div
          className="max-w-xl mx-auto w-[90%] md:w-full p-3 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center cursor-pointer hover:shadow-md transition-all"
          onClick={() => router.push("/search")}
        >
          <div className="flex-1 text-left pl-4 pr-4 py-2">
            <p className="text-xs text-slate-400 mb-1">理学療法士を検索</p>
            <p className="text-sm font-medium text-slate-700">症状・専門分野から探す</p>
          </div>
          <div className="bg-blue-600 text-white p-3 rounded-xl shadow-sm">
            <Search size={18} strokeWidth={2.5} />
          </div>
        </div>

        {/* 2つの入口（患者 / セラピスト） */}
        <div className="w-full max-w-4xl mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">

          {/* 患者向け */}
          <div
            onClick={() => router.push("/login")}
            className="group bg-white border border-slate-200 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <User size={22} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">利用者の方へ</h2>
                <p className="text-xs text-slate-500 mt-1">理学療法士を探して予約できます</p>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm text-blue-600 font-medium">
              はじめる <ArrowRight size={14} className="ml-1" />
            </div>
          </div>

          {/* セラピスト向け */}
          <div
            onClick={() => router.push("/register/therapist")}
            className="group bg-white border border-slate-200 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <PlusCircle size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">理学療法士の方へ</h2>
                <p className="text-xs text-slate-500 mt-1">登録して利用者とつながれます</p>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm text-slate-600 font-medium group-hover:text-blue-600">
              はじめる <ArrowRight size={14} className="ml-1" />
            </div>
          </div>

        </div>

        {/* フッターテキスト（控えめ） */}
        <div className="mt-16 opacity-60">
          <p className="text-[10px] text-slate-400 tracking-widest">
            Fukuoka Rehabilitation Matching
          </p>
        </div>

      </main>
    </div>
  );
}

