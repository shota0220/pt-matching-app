//利用者とPTのデータの方を定義
export type PT = {
    id: number;
    name: string;
    specialty: string;
    experienceYears: number;
    skills: string[];
};

export type UserCondition = {
    symptom: string;
    targetExperience: string;
};