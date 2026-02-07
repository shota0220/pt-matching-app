//PTのスキルと利用者の症状一致したとき加算方式でマッチングさせる
import { PT, UserCondition } from "../types/index";

export const calculateMatchScore = ( pt: PT, user: UserCondition): number => {
    let score = 0; //スコアを0から始める

    //症状の一致（5点とする)
    if (pt.skills.includes(user.symptom)) {
        score += 5;
    }

    //専門分野の一致(4点)
    if (user.symptom === "膝の痛み" && pt.specialty === "運動器") {
        score += 4;
    }

    //経験年数の一致(3点)
    if (user.targetExperience === "5年以上" && pt.experienceYears >= 5) {
        score += 3;
    }
    if (user.targetExperience === "3~5年" && pt.experienceYears >= 3 && pt.experienceYears < 5) {
        score += 3;
    }
    
    return score; //最終的なスコアを返す
};