//経験と評価を「円」に変換する関数
export const calculatePrice = (experienceYears: number, rating: number): number => {
  const basePrice = 5000; // 基本料金
  const experienceAdd = experienceYears * 200; // 1年につき200円アップ
  const ratingAdd = Math.round(rating * 500);  // 星1つにつき500円アップ
  
  return basePrice + experienceAdd + ratingAdd;
};