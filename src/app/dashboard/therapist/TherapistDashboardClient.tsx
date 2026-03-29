"use client";

import { useState, Suspense } from "react";
import { MapPin, User, Info, Calendar, MessageCircle, Search, Sparkles } from "lucide-react";
import VisitMapWrapper from "@/components/VisitMapWrapper";
import SOAPModal from "@/components/SOAPModal";
import type { DashboardReservation } from "@/types/dashboard";

export default function TherapistDashboardClient({ pt }: { pt: any }) {
  const pending = pt.reservations.filter(
    (r: DashboardReservation) => r.status === "PENDING"
  );
  const today = pt.reservations.filter(
    (r: DashboardReservation) => r.status === "CONFIRMED"
  );
  const nextPatient = today[0] || null;

  const [showSoapModal, setShowSoapModal] = useState(false);
  const [chatSummary, setChatSummary] = useState("");

  // ★ AI プロフィール添削用の state
  const [bio, setBio] = useState(pt.message || "");
  const [optimized, setOptimized] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const openSOAP = async (userId: string) => {
    const res = await fetch(`/api/chats/summary?userId=${userId}`);
    const data = await res.json();
    setChatSummary(data.summary);
    setShowSoapModal(true);
  };

  // ★ AI に添削してもらう処理
  const handleOptimize = async () => {
    setLoading(true);
    const res = await fetch("/api/ai/optimize-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "optimize_profile",
        text: bio,
        context: pt.specialty,
      }),
    });

    const data = await res.json();
    setOptimized(data.result || "");
    setLoading(false);
  };

  // ★ 添削後の文章を保存する処理
  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/therapist/update-profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        therapistId: pt.id,
        message: optimized,
      }),
    });
    setSaving(false);
    alert("プロフィールを更新しました！");
    location.reload();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* ヘッダー */}
      <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <p className="text-xs text-slate-500">今月の売上</p>
            <p className="text-3xl font-bold">
              ¥{pt.walletBalance.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/dashboard/therapist/search"
              className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition"
            >
              <Search size={18} />
              利用者を探す
            </a>

            <a
              href="/chat/list"
              className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
            >
              <MessageCircle size={18} />
              チャット一覧
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 左側 */}
        <div className="lg:col-span-8 space-y-10">
          {/* 承認待ち */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Calendar size={16} className="text-blue-600" />
              承認待ちの予約
            </h2>

            {pending.length > 0 ? (
              pending.map((res: DashboardReservation) => (
                <div
                  key={res.id}
                  className="bg-white border border-slate-200 rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg font-bold">{res.user.name}</p>
                    <p className="text-sm text-slate-500">
                      {new Date(res.date).toLocaleTimeString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <button
                    onClick={async () => {
                      await fetch(`/api/reservations/${res.id}/confirm`, {
                        method: "PATCH",
                      });
                      location.reload();
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    承認する
                  </button>
                </div>
              ))
            ) : (
              <p className="text-slate-500 text-sm">承認待ちはありません。</p>
            )}
          </section>

          {/* 今日の予約 */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Calendar size={16} className="text-blue-600" />
              今日の予約
            </h2>

            {today.length > 0 ? (
              today.map((res: DashboardReservation) => (
                <div
                  key={res.id}
                  className="bg-white border border-slate-200 rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg font-bold">{res.user.name}</p>
                    <p className="text-sm text-slate-500">
                      {new Date(res.date).toLocaleTimeString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <button
                    onClick={() => openSOAP(res.userId)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    SOAP生成
                  </button>
                </div>
              ))
            ) : (
              <p className="text-slate-500 text-sm">本日の予約はありません。</p>
            )}
          </section>

          {/* 次の訪問（地図） */}
          <section className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-blue-600" />
              次の訪問
            </h2>

            {nextPatient ? (
              <div className="space-y-4">
                <p className="text-lg font-bold">{nextPatient.user.name}</p>

                <VisitMapWrapper
                  lat={nextPatient.user.lat}
                  lng={nextPatient.user.lng}
                  name={nextPatient.user.name}
                />
              </div>
            ) : (
              <p className="text-slate-500 text-sm">次の訪問はありません。</p>
            )}
          </section>
        </div>

        {/* 右側 */}
        <aside className="lg:col-span-4 space-y-6">
          {/* AI メモ */}
          <section className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-4">
              <Info size={16} className="text-blue-600" />
              AIによる事前メモ
            </h2>

            {nextPatient ? (
              <Suspense fallback={<p className="text-sm text-slate-500">読み込み中...</p>}>
                {/* AIAssistantNotes */}
              </Suspense>
            ) : (
              <p className="text-sm text-slate-500">対象の利用者がいません。</p>
            )}
          </section>

          {/* ★ AI プロフィール添削 */}
          <section className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-blue-600" />
              AIプロフィール添削
            </h2>

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded-lg p-3 text-sm"
              rows={5}
              placeholder="自己紹介文を入力してください"
            />

            <button
              onClick={handleOptimize}
              disabled={loading}
              className="mt-3 w-full py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
            >
              {loading ? "AIが考えています..." : "AI に添削してもらう"}
            </button>

            {optimized && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm font-semibold mb-2">AI の提案:</p>
                <p className="text-sm leading-relaxed whitespace-pre-line">{optimized}</p>

                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="mt-3 w-full py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                >
                  {saving ? "保存中..." : "この内容でプロフィールを更新する"}
                </button>
              </div>
            )}
          </section>

          {/* 利用者情報 */}
          {nextPatient && (
            <section className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-4">
                <User size={16} className="text-blue-600" />
                利用者情報
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {nextPatient.user.medicalHistory ||
                  "登録された医療情報はありません。"}
              </p>
            </section>
          )}
        </aside>
      </main>

      {/* SOAP モーダル */}
      {showSoapModal && (
        <SOAPModal
          chatSummary={chatSummary}
          onClose={() => setShowSoapModal(false)}
        />
      )}
    </div>
  );
}
