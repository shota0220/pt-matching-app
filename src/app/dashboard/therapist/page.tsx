//理学療法士専用管理画面
//AI申し送り要約 (AIAssistantNotes):
//AI申し送り要約 (AIAssistantNotes):
//患者さんの直近のチャット履歴をAIで解析して、セラピストが訪問前に確認すべき重要事項を3行程度で要約する機能
//これにより、セラピストは訪問前に患者さんの最新の状態や要望を素早く把握できるようになる
import { useState, useEffect } from "react";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { GoogleGenerativeAI } from "@google/generative-ai";
import DashboardClientWrapper from "@/components/DashboardClientWrapper";

// --- サーバーアクション: 施術完了処理 ---
async function handleComplete(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const price = Number(formData.get("price"));
  const therapistId = formData.get("therapistId") as string;

  await prisma.$transaction([
    prisma.reservation.update({ where: { id }, data: { status: "COMPLETED" } }),
    prisma.therapist.update({
      where: { id: therapistId },
      data: { walletBalance: { increment: price } }
    }),
  ]);
  revalidatePath("/dashboard/therapist");
}

// --- サーバーコンポーネント: AI申し送り要約 ---
async function AIAssistantNotes({ userId, therapistId }: { userId: string, therapistId: string }) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  
  // 直近のチャット履歴を取得
  const messages = await prisma.chat.findMany({
    where: { userId, therapistId },
    orderBy: { createdAt: "desc" },
    take: 15,
  });

  if (messages.length === 0) return <p className="text-xs opacity-50">チャット履歴がありません</p>;

  const chatContext = messages.reverse().map(m => `${m.senderType}: ${m.message}`).join("\n");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const prompt = `以下のチャット内容を、セラピストが訪問直前に確認すべき「重要事項」として、3行の箇条書きで短く要約してください。\n\n${chatContext}`;
  
  try {
    const result = await model.generateContent(prompt);
    const summary = result.response.text();
    return (
      <div className="space-y-2 text-xs font-bold leading-relaxed text-blue-100">
        {summary.split('\n').map((line, i) => <p key={i}>{line}</p>)}
      </div>
    );
  } catch (e) {
    return <p className="text-xs">要約を読み込めませんでした</p>;
  }
}

export default async function UltimateTherapistDashboard() {
  const therapistId = "therapist_example_id"; // 実際はAuthから取得

  const pt = await prisma.therapist.findUnique({
    where: { id: therapistId },
    include: {
      reservations: { 
        include: { user: true }, 
        orderBy: { date: "asc" }, // 近い予約順
        where: { status: "PENDING" } // 未完了のみ
      },
      reviews: true,
    },
  });

  if (!pt) return <div className="p-10 text-center font-black">ACCESS DENIED.</div>;

  // 直近の予約者をAI要約の対象にする
  const nextPatient = pt.reservations[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      <DashboardClientWrapper /> {/* トースト通知などの制御用 */}

      {/* 1. 報酬 & KPI ヘッダー */}
      <div className="bg-white border-b border-gray-100 p-8 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex gap-10 items-end">
            <div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-1">Total Earnings</p>
              <h1 className="text-5xl font-black text-gray-900 tracking-tighter">¥{pt.walletBalance.toLocaleString()}</h1>
            </div>
            <div className="pb-1 bg-green-50 px-4 py-2 rounded-2xl border border-green-100">
              <p className="text-[10px] text-green-600 font-bold uppercase mb-1">Status</p>
              <span className="text-xs font-black text-green-700 uppercase">Payout Ready</span>
            </div>
          </div>
          <div className="flex gap-10 border-l border-gray-100 pl-10">
            <div className="text-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Success Rate</p>
              <p className="text-xl font-black text-gray-900">98%</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Rating</p>
              <p className="text-xl font-black text-yellow-500">★ {pt.rating.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* 2. メイン：予約スケジュール (8カラム) */}
        <div className="lg:col-span-8 space-y-10">
          <section className="bg-white p-2 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
             <div className="h-[350px] w-full rounded-[2.8rem] overflow-hidden bg-gray-100 relative">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-black z-0">
                 📍 Route Optimized for Hakata Area
               </div>
               <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
                 <p className="text-[10px] font-black text-blue-600 uppercase">Next Stop</p>
                 <p className="text-sm font-black text-gray-900">{nextPatient?.user.name} 様邸 (徒歩8分)</p>
               </div>
             </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] ml-6">Upcoming Missions</h2>
            {pt.reservations.length > 0 ? pt.reservations.map((res) => (
              <div key={res.id} className="bg-white rounded-[2.8rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 group hover:shadow-xl hover:border-blue-100 transition-all duration-500">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[1.8rem] flex items-center justify-center text-blue-600 font-black text-3xl group-hover:rotate-6 transition-transform">
                    {res.user.name[0]}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-2xl mb-1">{res.user.name} 様</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                        {new Date(res.date).toLocaleTimeString("ja-JP", { hour: '2-digit', minute: '2-digit' })} START
                      </span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Home Visit</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="px-6 py-4 bg-gray-50 text-gray-900 rounded-[1.4rem] font-black text-xs hover:bg-gray-100 transition-all border border-gray-100">
                    📝 CREATE SOAP
                  </button>
                  <form action={handleComplete}>
                    <input type="hidden" name="id" value={res.id} />
                    <input type="hidden" name="price" value={res.price} />
                    <input type="hidden" name="therapistId" value={pt.id} />
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-[1.4rem] font-black text-xs shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:translate-y-[-2px] transition-all active:scale-95">
                      COMPLETE
                    </button>
                  </form>
                </div>
              </div>
            )) : (
              <div className="p-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                <p className="font-black text-gray-300 uppercase tracking-widest">No Appointments Today</p>
              </div>
            )}
          </section>
        </div>

        {/* 3. サイド：AI Handover (4カラム) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* 申し送り要約セクション（今回追加の目玉） */}
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 p-10 rounded-[3.5rem] text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
            <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            <h3 className="text-[10px] font-black opacity-60 uppercase tracking-[0.4em] mb-6">AI Handover Memo</h3>
            
            {nextPatient ? (
              <>
                <p className="text-xl font-black leading-tight mb-6">
                  {nextPatient.user.name} 様の<br/><span className="text-blue-300 italic underline decoration-2">最新チャット要約</span>
                </p>
                {/* AIが自動要約を生成 */}
                <AIAssistantNotes userId={nextPatient.userId} therapistId={pt.id} />
              </>
            ) : (
              <p className="text-sm font-bold opacity-60">次回の予約が確定すると、ここに要約が表示されます。</p>
            )}

            <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-xl mt-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border border-white/10">
              Refresh Summary
            </button>
          </div>

          {/* 実績データ */}
          <div className="bg-white p-10 rounded-[3.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-8">Clinical Insight</h3>
            <div className="space-y-8">
              <div className="flex items-end gap-3 h-24 px-2">
                {[40, 90, 65, 80, 55].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-xl transition-all duration-1000 ${i === 1 ? 'bg-blue-600 shadow-lg shadow-blue-100' : 'bg-gray-100'}`} style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <p className="text-[11px] font-black text-gray-800 leading-relaxed">
                <span className="text-blue-600">疼痛レベルが先週比で15%低下。</span><br/>
                可動域訓練の強度を一段階上げる準備ができています。
              </p>
              <button className="w-full py-4 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                Share Progress to Family
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}