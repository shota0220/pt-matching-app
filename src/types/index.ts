// 利用者とPTのデータの型を定義
// 利用者とPTのデータの型を定義
export type PT = {
    id: string;
    name: string;
    specialty: string;
    experienceYears: number;
    skills: string[];
    photo: string;
    message: string;
    lat: number;   // 50人のデータに必須で含まれている
    lng: number;   // 50人のデータに必須で含まれている
    rating: number; 
    price: number; 
};

export type UserCondition = {
    symptom: string;
    targetExperience: string;
    // matchScore.ts で利用者の現在地を受け取るために追加
    lat?: number;
    lng?: number;
};

export const SPECIALTIES = [
  "運動器",      // 50人のデータで使われている名前に合わせる
  "神経系",      // 50人のデータで使われている名前に合わせる
  "中枢神経",    // 50人のデータで使われている名前に合わせる
  "呼吸器",      // 50人のデータで使われている名前に合わせる
  "小児",        // 50人のデータで使われている名前に合わせる
  "ウィメンズヘルス", 
  "認知症予防"
];