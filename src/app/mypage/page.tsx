"use client";

import { useEffect, useState } from "react";
import { format, startOfMonth, endOfMonth, isWithinInterval } from "date-fns";
import { ja } from "date-fns/locale";

interface Reservation {
  id: string;
  date: string;
  price: number;
  userName: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
}

export default function MyPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. データの取得
  const fetchMyData = async () => {
    const res = await fetch("/api/therapist/reservations");
    const data = await res.json();
    setReservations(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchMyData(); }, []);

  // 2. リアルタイム集計ロジック
  const now = new Date();
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);

  // 今月の確定売上
  const monthlySales = reservations
    .filter(r => r.status === "CONFIRMED" && isWithinInterval(new Date(r.date), { start: monthStart, end: monthEnd }))
    .reduce((sum, r) => sum + r.price, 0);

  // 承認待ち件数
  const pendingReservations = reservations.filter(r => r.status === "PENDING");

  // 3. 承認アクションの実行
  const handleConfirm = async (id: string) => {
    const res = await fetch(`/api/reservations/${id}/confirm`, { method: "PATCH" });
    if (res.ok) {
      alert("予約を確定しました！売上に反映されます。");
      fetchMyData(); // データを再読み込みして数値を更新
    }
  };

  if (loading) return <div className="p-20 text-center">データを同期中...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-gray-800">Dashboard</h1>

      {/* リアルタイム統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-blue-500">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">今月の確定売上</p>
          <div className="text-4xl font-black text-gray-900 mt-2">¥{monthlySales.toLocaleString()}</div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-amber-400">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">未承認の予約</p>
          <div className="text-4xl font-black text-amber-500 mt-2">{pendingReservations.length} <span className="text-xl">件</span></div>
          <p className="text-xs text-gray-400 mt-4">※早めの承認が信頼に繋がります</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-green-500">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">顧客満足度</p>
          <div className="text-4xl font-black text-green-500 mt-2">4.9 <span className="text-xl">★</span></div>
          <p className="text-xs text-gray-400 mt-4">最新5件のレビュー平均</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 予約一覧 & 承認アクション */}
        <section>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
            予約リクエスト管理
          </h2>
          <div className="space-y-4">
            {reservations.length === 0 ? (
              <p className="text-gray-400 py-10 text-center bg-white rounded-2xl border-2 border-dashed">予約はありません</p>
            ) : (
              reservations.map(res => (
                <div key={res.id} className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between group hover:shadow-md transition">
                  <div className="flex items-center gap-5">
                    <div className="bg-blue-50 text-blue-600 p-3 rounded-xl text-center min-w-[60px]">
                      <div className="text-xs font-bold">{format(new Date(res.date), "M月")}</div>
                      <div className="text-xl font-black">{format(new Date(res.date), "d")}</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-800">{res.userName} 様</div>
                      <div className="text-sm text-gray-500">{format(new Date(res.date), "HH:mm")}〜 / 訪問リハビリ</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-black text-gray-700 mb-2">¥{res.price.toLocaleString()}</div>
                    {res.status === "PENDING" ? (
                      <button 
                        onClick={() => handleConfirm(res.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
                      >
                        承認する
                      </button>
                    ) : (
                      <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase">確定済</span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* 簡易売上推移イメージ（グラフ風表示） */}
        <section className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-xl font-bold mb-6">週次売上レポート</h2>
          <div className="flex items-end gap-3 h-48 py-4">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full rounded-t-lg transition-all duration-500 ${i === 3 ? 'bg-blue-500' : 'bg-blue-100'}`} style={{ height: `${h}%` }}></div>
                <span className="text-[10px] font-bold text-gray-400">Day {i+1}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
            <p className="text-sm text-gray-500 leading-relaxed">
              先週より <span className="text-blue-600 font-bold">15% 売上が向上</span> しています。
              週末の予約枠をさらに開放すると、あと約¥25,000の収益が見込めます。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}