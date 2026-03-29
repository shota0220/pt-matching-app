//予約ページ
//患者様がカレンダーから日時を選び、予約を確定させるための「画面」
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Calendar, Clock, ChevronLeft, Loader2 } from "lucide-react";

export default function ReservationPage() {
  const { id } = useParams();
  const router = useRouter();

  const [therapist, setTherapist] = useState<{
    name: string;
    price: number;
    specialty: string;
  } | null>(null);

  const [selectedDate, setSelectedDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/therapist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTherapist(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleReserve = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          therapistId: id,
          date: selectedDate,
          price: therapist?.price || 5000,
        }),
      });

      if (res.ok) {
        router.push("/user/dashboard?reserved=true");
      }
    } catch (error) {
      console.error("Reservation error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-blue-600" size={40} />
          <p className="text-sm text-slate-500">読み込み中…</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-2xl px-6 py-4 border-b border-slate-200 flex items-center gap-3 sticky top-0 bg-white z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ChevronLeft size={20} />
          <span className="text-sm">戻る</span>
        </button>
      </header>

      <main className="w-full max-w-2xl px-6 mt-10">
        <form onSubmit={handleReserve} className="space-y-12">
          {/* Therapist Info */}
          <section className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">セラピスト情報</h2>

            <div className="space-y-2">
              <p className="text-xl font-bold">{therapist?.name}</p>
              <p className="text-sm text-slate-500">{therapist?.specialty}</p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-500">料金（60分）</p>
              <p className="text-2xl font-bold mt-1">
                ¥{(therapist?.price || 5000).toLocaleString()}
              </p>
            </div>
          </section>

          {/* Date Selection */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold">予約日時</h2>

            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="datetime-local"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-4 pl-12 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600 leading-relaxed">
              この予約は「仮予約」として送信されます。  
              セラピストが承認すると正式に確定し、チャット機能が利用可能になります。
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            disabled={!selectedDate || isSubmitting}
            className="w-full py-4 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-40"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              "予約する"
            )}
          </button>
        </form>
      </main>
    </div>
  );
}




