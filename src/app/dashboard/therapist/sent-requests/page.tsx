"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function SentRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/match-requests/sent")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">送信したスカウト一覧</h1>

      {requests.length === 0 ? (
        <p className="text-slate-500">まだスカウトを送っていません。</p>
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
                <p className="text-sm text-slate-700 mt-2">{req.message}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {new Date(req.createdAt).toLocaleString("ja-JP")}
                </p>
              </div>

              <span
                className={`text-sm font-semibold ${
                  req.status === "PENDING"
                    ? "text-yellow-600"
                    : req.status === "APPROVED"
                    ? "text-green-600"
                    : "text-slate-500"
                }`}
              >
                {req.status === "PENDING" && "承認待ち"}
                {req.status === "APPROVED" && "承認済み"}
                {req.status === "REJECTED" && "拒否済み"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
