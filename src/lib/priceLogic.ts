//経験と評価を「円」に変換する関数
/**
 * セラピストの市場価値に基づいた推奨施術料金を算出するロジック
 */

export const calculatePrice = (
  experienceYears: number,
  rating: number,
  isSpecialist: boolean = false
): number => {
  const BASE_PRICE = 6000; // 基本料金

  const cappedExp = Math.max(0, Math.min(experienceYears, 20));
  const experienceAdd = cappedExp * 300;

  const safeRating = Math.max(0, Math.min(rating, 5));
  const ratingAdd = Math.round(safeRating * 600);

  const specialistAdd = isSpecialist ? 1500 : 0;

  const totalPrice = BASE_PRICE + experienceAdd + ratingAdd + specialistAdd;

  return Math.ceil(totalPrice / 100) * 100;
};
