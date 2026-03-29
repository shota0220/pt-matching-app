"use client";

import dynamic from "next/dynamic";

const VisitMap = dynamic(() => import("./VisitMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] flex items-center justify-center text-slate-500 text-sm">
      地図を読み込んでいます...
    </div>
  ),
});

export default function VisitMapWrapper(props: any) {
  return <VisitMap {...props} />;
}
