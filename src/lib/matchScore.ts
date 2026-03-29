//PTのスキルと利用者の症状一致したとき加算方式でマッチングさせる、位置情報も計算に含む
import { Therapist } from "@prisma/client";
import { UserCondition } from "@/types";
import { getTravelTime } from "./googleMaps";
 
export const calculateMatchScore = async (
  t: Therapist,
  user: UserCondition,
  userLat?: number,
  userLng?: number
): Promise<number> => {
  let rawScore = 0;

  // ① 【専門性】症状との一致 (配点: 40点)
  const userNeeds = `${user.symptom ?? ""}`.toLowerCase();
  const specialty = t.specialty.toLowerCase();

  if (userNeeds.includes(specialty)) {
    rawScore += 40;
  } else {
    const parts = specialty.split("・").map((s) => s.trim().toLowerCase());
    if (parts.some((s) => s && userNeeds.includes(s))) {
      rawScore += 25;
    }
  }

  // ② 【経験】経験年数 (配点: 20点)
  const requiredExp = Number(user.targetExperience) || 0;

  if (t.experience >= requiredExp) {
    rawScore += 20;
  } else if (t.experience >= requiredExp - 2) {
    rawScore += 10;
  }

  // ③ 【利便性】移動時間 (配点: 40点)
  if (userLat !== undefined && userLng !== undefined) {
    try {
      const result = await getTravelTime(t.lat, t.lng, userLat, userLng);

      if (result) {
        if (result.duration <= 15) rawScore += 40;
        else if (result.duration <= 30) rawScore += 25;
        else if (result.duration <= 45) rawScore += 10;
      }
    } catch (error) {
      console.error("Score calculation travel time error:", error);
    }
  }

  return Math.min(rawScore, 100);
};

