"use client";

import { useEffect } from "react";
export default function DashboardClientWrapper() {
  useEffect(() => {
    // 1. リアルタイム通信の初期化（将来的な拡張）
    console.log("📡 [Client Logic] Therapist Dashboard Real-time Listener Initialized.");

    // 2. ブラウザ通知の権限リクエスト
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }

    // クリーンアップ処理
    return () => {
      console.log("🔌 [Client Logic] Cleaning up listeners...");
    };
  }, []);

 
  return null;
}
