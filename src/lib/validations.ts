import { z } from "zod";

//利用者登録の入力ルールを定義
//利用者
export const patientSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  symptom: z.string().min(5, "症状は5文字以上で入力してください").optional(),
});

//理学療法士
export const therapistSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  specialty: z.string().min(2, "専門分野を入力してください"), // これでエラーが消える！
  experience: z.number().or(z.string().transform(Number)), // 数字でも文字でもOKにする
  bio: z.string().optional(),
  license: z.string().optional(),
  imageUrl: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
});