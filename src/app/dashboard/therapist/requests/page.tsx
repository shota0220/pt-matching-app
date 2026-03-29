"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

export default function TherapistRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/match-requests/list")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .finally(() => setLoading(false));
  }, []);

  // 🔥 承認 → チャットルーム自動生成 → 自動遷移
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
      window.location.href = `/chat?room=${data.chatRoomId}`;
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
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">マッチング申請一覧</h1>

      {requests.length === 0 ? (
        <p className="text-slate-500">現在、申請はありません。</p>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="border border-slate-200 rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{req.user.name} さん</p>
                <p className="text-sm text-slate-500 mt-1">
                  症状: {req.user.symptom || "未入力"}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {new Date(req.createdAt).toLocaleString("ja-JP")}
                </p>
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
      )}
    </div>
  );
}
