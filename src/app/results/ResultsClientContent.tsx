"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { PT } from "@/types";
import Map from "@/components/Map";
import { Star, ChevronLeft, MapPin, CalendarDays, X } from "lucide-react";

interface ResultsClientContentProps {
  initialPTs: PT[];
  userLocation: { lat: number; lng: number };
  searchContext: {
    keyword: string;
    symptom: string;
  };
}

export default function ResultsClientContent({
  initialPTs,
  userLocation,
  searchContext,
}: ResultsClientContentProps) {
  const router = useRouter();
  const [sortType, setSortType] = useState("score");
  const [selectedPT, setSelectedPT] = useState<PT | null>(null);

  // 並び替え
  const displayList = useMemo(() => {
    const sorted = [...initialPTs];
    switch (sortType) {
      case "score":
        sorted.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
        break;
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "price_low":
        sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
    }
    return sorted;
  }, [initialPTs, sortType]);

  return (
    <div className="flex flex-col h-screen bg-white text-slate-900 overflow-hidden">
      {/* Header */}
      <header className="px-6 py-4 bg-white border-b border-slate-200 flex justify-between items-center sticky top-0 z-50">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ChevronLeft size={20} />
          <span className="text-sm">検索条件に戻る</span>
        </button>
        <div className="text-right">
          <p className="text-xs text-slate-500">
            キーワード: {searchContext.keyword || "指定なし"}
          </p>
          <p className="text-xs text-slate-500">
            症状: {searchContext.symptom || "指定なし"}
          </p>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[420px] h-full overflow-y-auto border-r border-slate-200 p-6 space-y-6 bg-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold"></p>

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="text-sm border border-slate-300 rounded-md px-2 py-1 bg-white"
            >
              <option value="score">おすすめ順</option>
              <option value="rating">評価が高い順</option>
              <option value="price_low">料金が安い順</option>
            </select>
          </div>

          {displayList.length === 0 && (
            <p className="text-sm text-slate-500">セラピストが見つかりません。</p>
          )}

          {displayList.map((pt) => {
            const tags = Array.isArray(pt.tags) ? pt.tags : [];

            return (
              <div
                key={pt.id}
                onClick={() => setSelectedPT(pt)}
                className={`p-4 rounded-lg border cursor-pointer transition ${
                  selectedPT?.id === pt.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={pt.photo || "/images/default-pt.jpg"}
                    className="w-16 h-16 rounded-md object-cover"
                    alt={pt.name}
                  />
                  <div className="flex-1">
                    <p className="font-bold text-lg">{pt.name}</p>
                    <p className="text-sm text-slate-500">{pt.specialty}</p>

                    {/* ★ AI タグ表示（ここが今回の追加ポイント） */}
                    {tags.length > 0 && (
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            fill={i < Math.floor(pt.rating) ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-700">
                        {pt.rating.toFixed(1)}
                      </span>
                    </div>

                    <p className="text-sm font-semibold mt-1">
                      ¥{pt.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </aside>

        {/* Map */}
        <section className="flex-1 bg-slate-100 relative">
          <Map
            pts={displayList}
            center={userLocation}
            onMarkerClick={(pt) => setSelectedPT(pt)}
          />
        </section>

        {/* Detail Drawer */}
        {selectedPT && (
          <>
            <div
              onClick={() => setSelectedPT(null)}
              className="absolute inset-0 bg-black/20 z-40"
            />

            <div className="absolute top-0 right-0 bottom-0 w-[420px] bg-white z-50 border-l border-slate-200 p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">セラピスト詳細</h2>
                <button
                  onClick={() => setSelectedPT(null)}
                  className="text-slate-500 hover:text-slate-900"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <img
                  src={selectedPT.photo || "/images/default-pt.jpg"}
                  className="w-32 h-32 rounded-lg object-cover mx-auto"
                  alt={selectedPT.name}
                />

                <div className="text-center space-y-1">
                  <p className="text-2xl font-bold">{selectedPT.name}</p>
                  <p className="text-sm text-slate-500">{selectedPT.specialty}</p>
                </div>

                {/* ★ 詳細画面にも AI タグを表示 */}
                {Array.isArray(selectedPT.tags) && selectedPT.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap justify-center">
                    {selectedPT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500">紹介文</p>
                    <p className="text-slate-700 leading-relaxed mt-1">
                      {selectedPT.message || "紹介文は登録されていません。"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">経験年数</p>
                    <p className="font-semibold mt-1">
                      {selectedPT.experienceYears} 年
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">評価</p>
                    <p className="font-semibold mt-1">
                      {selectedPT.rating.toFixed(1)} / 5.0
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">料金(60分)</p>
                    <p className="text-2xl font-bold mt-1">
                      ¥{selectedPT.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => router.push(`/reserve/${selectedPT.id}`)}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <CalendarDays size={18} />
                  予約へ進む
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
