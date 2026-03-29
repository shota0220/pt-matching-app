//自分の身体の状態を登録・保存するオンボーディング画面
"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, ChevronLeft } from "lucide-react";

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    gender: "回答しない",
    height: "170",
    weight: "65",
    medicalHistory: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleComplete = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch("/api/user/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          ...formData,
          bmi: (
            Number(formData.weight) /
            Math.pow(Number(formData.height) / 100, 2)
          ).toFixed(1),
        }),
      });

      if (response.ok) {
        router.push("/therapist/search");
      }
    } catch (error) {
      console.error("Profile Save Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] bg-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[480px] px-6 py-6 flex items-center justify-between">
        <button
          onClick={step === 1 ? () => router.back() : handleBack}
          className="text-slate-500 hover:text-slate-800 transition"
        >
          <ChevronLeft size={20} />
        </button>

        <p className="text-xs text-slate-500">
          ステップ {step} / 3
        </p>

        <div className="w-6" />
      </header>

      {/* Main */}
      <main className="w-full max-w-[480px] px-6 flex-1 pb-20">
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-10">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                基本情報を入力してください
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                利用者として必要な基本情報を入力します。
              </p>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm text-slate-700">氏名</label>
                <input
                  type="text"
                  placeholder="福岡 太郎"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label className="text-sm text-slate-700">性別</label>
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option>男性</option>
                  <option>女性</option>
                  <option>その他</option>
                  <option>回答しない</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!formData.name}
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-40"
            >
              次へ進む
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-10">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                身体情報を入力してください
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                身長と体重を入力すると、BMI が自動計算されます。
              </p>
            </div>

            <div className="space-y-6">
              {/* Height */}
              <div className="space-y-2">
                <label className="text-sm text-slate-700">身長（cm）</label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) =>
                    setFormData({ ...formData, height: e.target.value })
                  }
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <label className="text-sm text-slate-700">体重（kg）</label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) =>
                    setFormData({ ...formData, weight: e.target.value })
                  }
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              次へ進む
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-10">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                現在の症状について
              </h1>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                理学療法士が事前に状態を把握するために、現在のお悩みを具体的に記載してください。
              </p>
            </div>

            <textarea
              placeholder="例：2週間前から階段の昇り降りで右膝の外側が痛む。歩き始めに違和感がある。"
              value={formData.medicalHistory}
              onChange={(e) =>
                setFormData({ ...formData, medicalHistory: e.target.value })
              }
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none min-h-[200px] resize-none focus:ring-2 focus:ring-blue-500/20"
            />

            <button
              onClick={handleComplete}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-40 flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                "登録を完了する"
              )}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <Loader2 className="animate-spin text-blue-600" size={32} />
          <span className="text-xs text-slate-400">読み込み中…</span>
        </div>
      }
    >
      <OnboardingContent />
    </Suspense>
  );
}



