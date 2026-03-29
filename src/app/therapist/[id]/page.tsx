//個別のPTの詳細プロフィール画面
import { prisma } from "@/lib/prisma";
import ReviewList from "@/components/ReviewList";
import ReviewForm from "@/components/ReviewForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Star, ChevronLeft, Calendar, MapPin } from "lucide-react";

async function getAITagsFromReviews(reviews: any[]) {
  if (reviews.length === 0) return ["丁寧な対応", "信頼できる"];

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const reviewText = reviews.map((r) => r.comment).join("\n");
    const prompt = `以下のレビューから、この理学療法士の強みを3つ、4〜6文字程度の短い日本語で抽出してください。
例: 丁寧対応, 技術力高い, 説明上手
回答は「、」区切りで3つだけ出力してください。

${reviewText}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text.split(/[、,\n]/).slice(0, 3).map((t) => t.trim());
  } catch {
    return ["信頼厚い", "技術志向"];
  }
}

export default async function PublicProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id;

  const pt = await prisma.therapist.findUnique({
    where: { id },
    include: {
      reviews: {
        include: { user: true },
        orderBy: { createdAt: "desc" },
      },
      reservations: currentUserId
        ? { where: { userId: currentUserId, status: "COMPLETED" } }
        : false,
    },
  });

  if (!pt) notFound();

  const aiTags = await getAITagsFromReviews(pt.reviews);
  const canReview =
    !!(currentUserId && pt.reservations && (pt.reservations as any[]).length > 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Header */}
      <nav className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 z-50">
        <Link
          href="/results"
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ChevronLeft size={18} />
          <span className="text-sm">検索結果に戻る</span>
        </Link>
      </nav>

      {/* Profile Header */}
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-10 text-center">
        <img
          src={pt.photo || "/images/default-pt.jpg"}
          className="w-40 h-40 rounded-2xl object-cover mx-auto border border-slate-200"
          alt={pt.name}
        />

        <h1 className="text-3xl font-bold mt-6">{pt.name}</h1>
        <p className="text-sm text-slate-500 mt-1">{pt.specialty}</p>

        {/* AI Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {aiTags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating & Experience */}
        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="font-semibold">{pt.rating.toFixed(1)}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">評価</p>
          </div>

          <div className="text-center">
            <p className="font-semibold">{pt.experience} 年</p>
            <p className="text-xs text-slate-500 mt-1">経験年数</p>
          </div>

          <div className="text-center">
            <p className="font-semibold flex items-center justify-center gap-1">
              <MapPin size={14} /> 福岡
            </p>
            <p className="text-xs text-slate-500 mt-1">活動エリア</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 space-y-16">
        {/* Message */}
        <section>
          <h2 className="text-lg font-semibold mb-4">紹介文</h2>
          <p className="text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-lg border border-slate-200">
            {pt.message ||
              "紹介文はまだ登録されていません。"}
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-4">
          {[
            { label: "利用者数", val: "120+" },
            { label: "専門分野", val: pt.specialty },
            { label: "資格", val: "理学療法士" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-lg p-4 text-center"
            >
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-lg font-semibold mt-1">{item.val}</p>
            </div>
          ))}
        </section>

        {/* Reviews */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-semibold">レビュー</h2>
            <p className="text-sm text-slate-500">{pt.reviews.length} 件</p>
          </div>

          {canReview && currentUserId && (
            <div className="mb-10">
              <ReviewForm therapistId={pt.id} userId={currentUserId} />
            </div>
          )}

          {pt.reviews.length > 0 ? (
            <ReviewList reviews={pt.reviews} />
          ) : (
            <p className="text-slate-500 text-sm bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
              まだレビューがありません。
            </p>
          )}
        </section>
      </main>

      {/* Footer Buttons */}
      <footer className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex gap-4">
          <Link
            href={currentUserId ? `/chat/${pt.id}?name=${pt.name}` : "/login"}
            className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-lg text-sm text-center hover:bg-slate-200 transition"
          >
            メッセージ
          </Link>

          <Link
            href={currentUserId ? `/reserve/${pt.id}` : "/login"}
            className="flex-1 py-3 bg-blue-600 text-white rounded-lg text-sm text-center hover:bg-blue-700 transition"
          >
            予約へ進む
          </Link>
        </div>
      </footer>
    </div>
  );
}


