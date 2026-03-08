//PTのスキルと利用者の症状一致したとき加算方式でマッチングさせる、位置情報も計算に含む
import { PT, UserCondition } from "@/types/index";

export const calculateMatchScore = ( 
    pt: PT, 
    user: UserCondition,
    userLat?: number, // 追加：利用者の今の緯度
    userLng?: number  // 追加：利用者の今の経度
): number => {
    let score = 0;

    // ① 既存ロジック：症状の一致（5点）
    if (pt.skills.includes(user.symptom)) {
        score += 5;
    }

    // ② 既存ロジック：専門分野の一致（4点）
    if (user.symptom === "膝の痛み" && pt.specialty === "運動器") {
        score += 4;
    }

    // ③ 既存ロジック：経験年数の一致（3点）
    if (user.targetExperience === "5年以上" && pt.experienceYears >= 5) {
        score += 3;
    } else if (user.targetExperience === "3~5年" && pt.experienceYears >= 3 && pt.experienceYears < 5) {
        score += 3;
    }

    // ④ 【追加分】：距離による加点（5点満点）
    // 解説：もし位置情報が取れていれば、距離を計算して近いほど加点します
    if (userLat !== undefined && userLng !== undefined && pt.lat && pt.lng) {
        const distance = Math.sqrt(
            Math.pow(pt.lat - userLat, 2) + Math.pow(pt.lng - userLng, 2)
        );
        if (distance < 0.05) { // 約5km以内
            score += 5;
        } else if (distance < 0.1) { // 約10km以内
            score += 2;
        }
    }
    
    return score;
};