"use client";

import { useEffect } from "react";

export default function DashboardClientWrapper() {
  useEffect(() => {
    // ここにリアルタイム通知（PusherやSocket.ioなど）のリスナーを
    // 将来的に配置して、予約が入った瞬間に音を鳴らすなどの処理が書けます。
    console.log("Therapist Dashboard Client Logic Loaded.");
  }, []);

  return null; // UIはサーバー側で描画するため、このラッパー自体は何も表示しません
}