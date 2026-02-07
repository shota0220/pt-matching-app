//利用者とPTのデータの方を定義
export type PT = {
    id: number;
    name: string;
    specialty: string;
    experienceYears: number;
    skills: string[];
    photo: string;
    message: string;
};

export type UserCondition = {
    symptom: string;
    targetExperience: string;
};

export const SPECIALTIES = [
  "膝関節疾患", 
  "腰痛・脊椎疾患", 
  "股関節疾患", 
  "スポーツ外傷", 
  "脳血管障害（脳卒中等）", 
  "心疾患リハビリ", 
  "呼吸器リハビリ", 
  "小児リハビリ", 
  "ウィメンズヘルス（産前産後）", 
  "認知症予防"
];