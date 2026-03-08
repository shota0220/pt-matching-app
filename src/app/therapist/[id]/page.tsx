//特定のPTの詳細プロフィール画面
import prisma from "@/lib/prisma";
import ReviewList from "@/components/ReviewList";
import ReviewForm from "@/components/ReviewForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";

// AI分析関数（サーバーサイドで実行）
async function getAITagsFromReviews(reviews: any[]) {
  if (reviews.length === 0) return [];
  
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const reviewText = reviews.map(r => r.comment).join("\n");
    const prompt = `
      以下の理学療法士へのレビューを分析し、このセラピストの特徴を表す短いタグ（3〜5文字）を最大4つ抽出してください。
      例: 優しく丁寧, 理論的, 腰痛に強い, 話しやすい
      出力はカンマ区切りのタグのみにしてください。
      レビュー内容:
      ${reviewText}
    `;

    const result = await model.generateContent(prompt);
    return result.response.text().split(",").map(tag => tag.trim());
  } catch (e) {
    console.error("AI分析エラー:", e);
    return [];
  }
}

export default async function PublicProfile({ params }: { params: { id: string } }) {
  const currentUserId = "user_example_id"; // 実際はAuthから取得

  // 1. セラピスト、レビュー、そして「完了した予約」があるかを一括チェック
  const pt = await prisma.therapist.findUnique({
    where: { id: params.id },
    include: {
      reviews: {
        include: { user: true },
        orderBy: { createdAt: "desc" }
      },
      reservations: {
        where: {
          userId: currentUserId,
          status: "COMPLETED"
        }
      }
    }
  });

  if (!pt) notFound();

  // 2. AIタグの取得
  const aiTags = await getAITagsFromReviews(pt.reviews);
  
  // 3. レビュー権限の判定
  const canReview = pt.reservations.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="h-64 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 relative" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 -mt-32 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-10 overflow-hidden border border-white/50">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                {pt.photo ? <img src={pt.photo} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-400">{pt.name[0]}</div>}
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                {pt.specialty}
              </div>
              <h1 className="text-4xl font-black text-gray-900 leading-tight">{pt.name}</h1>
              
              {/* AI生成タグの表示エリア */}
              {aiTags.length > 0 && (
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                  {aiTags.map((tag, i) => (
                    <span key={i} className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-sm">
                      ✨ {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Price</p>
                  <p className="text-2xl font-black text-blue-600">¥{pt.price.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Rating</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-yellow-500">★ {pt.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href={`/chat/${pt.id}?name=${pt.name}&userId=${currentUserId}`} className="flex-1 bg-white text-blue-600 border-2 border-blue-600 py-4 rounded-2xl font-bold text-center hover:bg-blue-50">チャットで相談する</Link>
            <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl">今すぐ予約</button>
          </div>

          <hr className="my-12 border-gray-50" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-lg font-black mb-4 flex items-center gap-2 text-gray-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  PROFESSIONAL SUMMARY
                </h2>
                <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 italic">
                  <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-wrap">{pt.message}</p>
                </div>
              </section>

              <section>
                <ReviewList reviews={pt.reviews} />
              </section>

              {/* レビュー投稿制限ロジック */}
              <section>
                {canReview ? (
                  <ReviewForm therapistId={pt.id} userId={currentUserId} />
                ) : (
                  <div className="bg-gray-50 p-8 rounded-[2rem] border-2 border-dashed border-gray-200 text-center">
                    <p className="text-gray-400 text-sm font-bold">
                      レビューの投稿は、サービス完了後に可能になります。
                    </p>
                  </div>
                )}
              </section>
            </div>

            <aside className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-black text-gray-800 text-xs mb-4 uppercase tracking-widest">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["徒手療法", "運動療法", "脳卒中リハ"].map(tag => (
                    <span key={tag} className="bg-gray-50 text-gray-500 px-3 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="bg-blue-600 p-6 rounded-3xl text-white shadow-lg">
                <h3 className="font-bold text-sm mb-2 opacity-80 uppercase tracking-widest">Service Area</h3>
                <p className="text-sm font-medium italic">福岡県内全域・自宅訪問可</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}　