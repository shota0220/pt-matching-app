// 結果画面
import { prisma } from "@/lib/prisma";
import { Therapist } from "@prisma/client";
import { calculateMatchScore } from "@/lib/matchScore";
import ResultsClientContent from "./ResultsClientContent";
import { PT, UserCondition } from "@/types";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ResultsPage({ searchParams }: Props) {
  // 1. パラメータの正規化
  const params = await searchParams;

  const normalize = (val: string | string[] | undefined): string =>
    Array.isArray(val) ? val[0] : val || "";

  const rawSpecialty = normalize(params.specialty);
  const symptom = normalize(params.symptom);
  const experienceStr = normalize(params.experience);

  const userLat = parseFloat(normalize(params.lat)) || 33.5902;
  const userLng = parseFloat(normalize(params.lng)) || 130.4017;

  // 2. Prisma でセラピスト取得
  let rawTherapists: Therapist[] = [];
  try {
    rawTherapists = await prisma.therapist.findMany({
      where: rawSpecialty
        ? {
            specialty: {
              contains: rawSpecialty,
            },
          }
        : {},
      take: 40,
    });
  } catch (error) {
    console.error("❌ Prisma Fetch Error (ResultsPage):", error);
    rawTherapists = [];
  }

  // 3. マッチング条件
  const condition: UserCondition = {
    symptom,
    targetExperience: experienceStr,
    lat: userLat,
    lng: userLng,
  };

  // 4. specialty の型安全なバリデーション
  const ensureSpecialty = (val: string): PT["specialty"] => {
    const validOptions: PT["specialty"][] = [
      "腰痛・膝の痛み（運動器）",
      "脳卒中・麻痺（中枢神経）",
      "歩行困難・転倒予防",
      "術後リハビリ・骨折",
      "神経・パーキンソン病",
      "産前産後・骨盤ケア",
      "スポーツ障害・部活",
      "認知症・認知機能ケア",
    ];

    return validOptions.includes(val as PT["specialty"])
      ? (val as PT["specialty"])
      : "歩行困難・転倒予防";
  };

  // 5. Therapist → PT の完全型安全変換（★ tags を追加）
  const scoredPTs: PT[] = await Promise.all(
    rawTherapists.map(async (t) => {
      const score = await calculateMatchScore(t, condition, userLat, userLng);

      return {
        id: t.id,
        name: t.name,
        specialty: ensureSpecialty(t.specialty),
        experienceYears: t.experience,
        skills: [t.specialty, "訪問リハ"],
        photo: t.photo ?? "/images/default-pt.jpg",
        message: t.message ?? "",
        lat: t.lat,
        lng: t.lng,
        rating: t.rating,
        price: t.price,
        matchScore: score,

        // ★ ここが今回の追加ポイント
        tags: t.tags ? JSON.parse(t.tags) : [],
      };
    })
  );

  // 6. ソート
  const sortedPTs = scoredPTs.sort((a, b) => {
    if ((b.matchScore || 0) !== (a.matchScore || 0)) {
      return (b.matchScore || 0) - (a.matchScore || 0);
    }
    return b.rating - a.rating;
  });

  // 7. クライアントへ渡す
  const serializedPTs = JSON.parse(JSON.stringify(sortedPTs));

  return (
    <div className="w-full flex justify-center bg-[#FBFBFC]">
      <div className="w-full max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000 px-6 sm:px-10">
        <ResultsClientContent
          initialPTs={serializedPTs}
          userLocation={{ lat: userLat, lng: userLng }}
          searchContext={{
            keyword: rawSpecialty,
            symptom,
          }}
        />
      </div>
    </div>
  );
}

