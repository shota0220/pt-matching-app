//利用者側の画面、「マイ・ケア」のダッシュボード
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MessageCircle,
  Clock,
  CheckCircle2,
  Loader2,
  XCircle,
} from "lucide-react";

interface Reservation {
  id: string;
  date: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  price: number;
  therapistName: string;
  specialty: string;
  rating: number;
}

interface MatchRequest {
  id: string;
  message: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
  therapist: {
    id: string;
    name: string;
    specialty: string;
  };
}

export default function UserDashboard() {
  const [status] = useState<"WAITING" | "MATCHED">("WAITING");
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [requests, setRequests] = useState<MatchRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const reserved = searchParams.get("reserved");

  // 予約一覧 + スカウト一覧を取得
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch("/api/user/reservations"),
          fetch("/api/match-requests/user-list"),
        ]);

        const reservationsData = await res1.json();
        const requestsData = await res2.json();

        setReservations(reservationsData || []);
        setRequests(requestsData || []);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  // 🔥 承認 → チャットルーム自動生成 → /chat/[id] に遷移
  const handleApprove = async (id: string) => {
    setProcessingId(id);

    const res = await fetch("/api/match-requests/approve", {
      method: "POST",
      body: JSON.stringify({ requestId: id }),
    });

    const data = await res.json();

    // ステータス更新
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "APPROVED" } : r))
    );

    // 🔥 チャットルームが作成されたら自動遷移
    if (data.chatRoomId) {
      window.location.href = `/chat/${data.chatRoomId}`;
      return;
    }

    setProcessingId(null);
  };

  const handleReject = async (id: string) => {
    setProcessingId(id);
    await fetch("/api/match-requests/reject", {
      method: "POST",
      body: JSON.stringify({ requestId: id }),
    });
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "REJECTED" } : r))
    );
    setProcessingId(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-sm text-slate-500">読み込み中…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">マイページ</h1>
          <Link
            href="/search"
            className="text-sm text-blue-600 hover:underline"
          >
            セラピストを探す
          </Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 pt-10 space-y-12">

        {/* 🔥 チャット一覧への導線 */}
        <Link
          href="/chat/list"
          className="block bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
        >
          チャット一覧を開く
        </Link>

        {/* 予約完了メッセージ */}
        {reserved && (
          <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg text-sm">
            予約リクエストを送信しました。セラピストの承認をお待ちください。
          </div>
        )}

        {/* 🔥 スカウト通知 */}
        {requests.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-4">スカウト・申請</h2>

            <div className="space-y-4">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">
                      {req.therapist.name} 先生からのスカウト
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      専門: {req.therapist.specialty}
                    </p>
                    <p className="text-sm text-slate-700 mt-2">{req.message}</p>
                  </div>

                  <div className="flex gap-2">
                    {req.status === "PENDING" ? (
                      <>
                        <button
                          onClick={() => handleApprove(req.id)}
                          disabled={processingId === req.id}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm flex items-center gap-1"
                        >
                          {processingId === req.id ? (
                            <Loader2 className="animate-spin w-4 h-4" />
                          ) : (
                            <CheckCircle2 size={16} />
                          )}
                          承認
                        </button>

                        <button
                          onClick={() => handleReject(req.id)}
                          disabled={processingId === req.id}
                          className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm flex items-center gap-1"
                        >
                          <XCircle size={16} />
                          お断り
                        </button>
                      </>
                    ) : (
                      <span
                        className={`text-sm font-semibold ${
                          req.status === "APPROVED"
                            ? "text-green-600"
                            : "text-slate-500"
                        }`}
                      >
                        {req.status === "APPROVED" ? "承認済み" : "拒否済み"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Status */}
        <section>
          <h2 className="text-lg font-semibold mb-4">現在の状況</h2>

          {status === "WAITING" ? (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
              <Clock size={32} className="mx-auto text-blue-500 mb-4" />
              <p className="text-lg font-bold">マッチング中です</p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                あなたの条件に合うセラピストを探しています。
                <br />
                しばらくお待ちください。
              </p>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <CheckCircle2 size={32} className="mx-auto text-blue-600 mb-4" />
              <p className="text-lg font-bold">セラピストが見つかりました</p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                担当セラピストとチャットで相談できます。
              </p>

              {/* 🔥 統合後は /chat ではなく /chat/list */}
              <Link
                href="/chat/list"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                <MessageCircle size={18} />
                チャット一覧を開く
              </Link>
            </div>
          )}
        </section>

        {/* Reservation List */}
        <section>
          <h2 className="text-lg font-semibold mb-4">予約一覧</h2>

          {reservations.length === 0 ? (
            <p className="text-sm text-slate-500">現在、予約はありません。</p>
          ) : (
            <div className="space-y-4">
              {reservations.map((res) => (
                <div
                  key={res.id}
                  className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold">
                      {new Date(res.date).toLocaleDateString("ja-JP", {
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      {new Date(res.date).toLocaleTimeString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      担当：{res.therapistName}（{res.specialty}）
                    </p>
                  </div>

                  <span
                    className={`text-sm font-medium ${
                      res.status === "PENDING"
                        ? "text-yellow-600"
                        : res.status === "CONFIRMED"
                        ? "text-green-600"
                        : "text-slate-500"
                    }`}
                  >
                    {res.status === "PENDING" && "承認待ち"}
                    {res.status === "CONFIRMED" && "確定"}
                    {res.status === "CANCELLED" && "キャンセル"}
                    {res.status === "COMPLETED" && "完了"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}






