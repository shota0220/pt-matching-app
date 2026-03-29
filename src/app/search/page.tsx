"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const SPECIALTIES = [
  "腰痛・膝の痛み（運動器）",
  "脳卒中・麻痺（中枢神経）",
  "歩行困難・転倒予防",
  "術後リハビリ・骨折",
  "神経・パーキンソン病",
  "産前産後・骨盤ケア",
  "スポーツ障害・部活",
  "認知症・認知機能ケア",
];


export default function SearchPage() {
  const router = useRouter();

  const [specialty, setSpecialty] = useState("");
  const [symptom, setSymptom] = useState("");
  const [experience, setExperience] = useState("1");
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!specialty) {
      alert("専門分野を選択してください。");
      return;
    }

    setLoading(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          pushToResults(latitude.toString(), longitude.toString());
        },
        () => {
          // 福岡市中心（fallback）
          pushToResults("33.5902", "130.4017");
        },
        { timeout: 6000 }
      );
    } else {
      pushToResults();
    }
  };

  const pushToResults = (lat?: string, lng?: string) => {
    const query = new URLSearchParams({
      specialty,
      symptom,
      experience,
      ...(lat && { lat }),
      ...(lng && { lng }),
    });

    setTimeout(() => {
      router.push(`/results?${query.toString()}`);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-xl mx-auto px-6 pt-16 pb-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl font-bold">セラピスト検索</h1>
          <p className="text-sm text-slate-500 mt-2">
            条件を入力して、あなたに合ったセラピストを探しましょう。
          </p>
        </header>

        <div className="space-y-12">
          {/* Step 1: Specialty */}
          <section>
            <label className="block text-sm font-semibold text-slate-700 mb-4">
              専門分野（必須）
            </label>

            <div className="grid grid-cols-2 gap-4">
              {SPECIALTIES.map((spec) => (
                <button
                  key={spec}
                  type="button"
                  onClick={() => setSpecialty(spec)}
                  className={`p-4 rounded-lg border text-sm text-left transition ${
                    specialty === spec
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Symptom */}
          <section>
            <label className="block text-sm font-semibold text-slate-700 mb-4">
              現在の症状（任意）
            </label>

            <textarea
              placeholder="例：階段の昇り降りで膝が痛む、歩き始めに違和感がある など"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm min-h-[140px] outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </section>

          {/* Step 3: Experience */}
          <section>
            <label className="block text-sm font-semibold text-slate-700 mb-4">
              経験年数
            </label>

            <div className="flex gap-4">
              {[
                { val: "1", label: "1年以上" },
                { val: "5", label: "5年以上" },
                { val: "10", label: "10年以上" },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setExperience(item.val)}
                  className={`flex-1 p-4 rounded-lg border text-sm transition ${
                    experience === item.val
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </section>

          {/* Search Button */}
          <div className="pt-4">
            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-40"
            >
              {loading ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                "検索する"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



