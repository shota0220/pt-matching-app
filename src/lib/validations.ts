import { z } from "zod";

export const patientSchema = z.object({
  name: z
    .string()
    .min(2, "お名前は2文字以上で入力してください")
    .max(50, "お名前が長すぎます"),
  email: z.string().email("正しいメールアドレスの形式で入力してください"),
  symptom: z
    .string()
    .max(200, "症状は200文字以内で入力してください")
    .optional()
    .or(z.literal("")),
  medicalHistory: z
    .string()
    .max(200, "既往歴は200文字以内で入力してください")
    .optional()
    .or(z.literal("")),
});

/**
 * 理学療法士（Therapist）登録用スキーマ
 */
export const therapistSchema = z.object({
  name: z.string().min(2, "お名前は2文字以上で入力してください").max(50, "お名前が長すぎます"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  specialty: z
    .string()
    .min(2, "「脊柱」「スポーツ障害」など、あなたの強みを入力してください")
    .max(100, "専門分野は100文字以内で入力してください"),
  experience: z
    .union([z.number(), z.string()])
    .transform((val) => Number(val))
    .pipe(
      z
        .number()
        .min(0, "経験年数は0以上で入力してください")
        .max(50, "50年以内で入力してください")
    ),
  bio: z
    .string()
    .max(500, "自己紹介は500文字以内で入力してください")
    .optional()
    .or(z.literal("")),
  license: z.string().min(2, "資格情報を入力してください（例: 理学療法士）").max(100),
  imageUrl: z
    .string()
    .url("有効な画像URLを入力してください")
    .optional()
    .or(z.literal("")),
});

export type PatientInput = z.infer<typeof patientSchema>;
export type TherapistInput = z.infer<typeof therapistSchema>;

