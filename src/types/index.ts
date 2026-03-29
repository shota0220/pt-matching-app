// 利用者とPTのデータの型を定義

export const SPECIALTIES = [
  "腰痛・膝の痛み（運動器）",
  "脳卒中・麻痺（中枢神経）",
  "歩行困難・転倒予防",
  "術後リハビリ・骨折",
  "神経・パーキンソン病",
  "産前産後・骨盤ケア",
  "スポーツ障害・部活",
  "認知症・認知機能ケア",
] as const;

export type Specialty = (typeof SPECIALTIES)[number];

export type PT = {
  id: string;
  name: string;
  specialty: Specialty;
  experienceYears: number;
  skills: string[];
  photo: string;
  message: string;
  lat: number;
  lng: number;
  rating: number;
  price: number;
  matchScore?: number;
  tags: string[];
};


export type UserCondition = {
  symptom: string;
  medicalHistory?: string;
  targetExperience: string;
  lat?: number;
  lng?: number;
};

