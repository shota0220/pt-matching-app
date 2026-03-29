//ログイン画面
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { Loader2, Mail, Lock, AlertCircle } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email({ message: "メールアドレスの形式が正しくありません" }),
  password: z.string().min(6, { message: "パスワードは6文字以上で入力してください" }),
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      setError(
        result.error.flatten().fieldErrors.email?.[0] ||
          result.error.flatten().fieldErrors.password?.[0] ||
          "入力内容を確認してください"
      );
      return;
    }

    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("メールアドレスまたはパスワードが正しくありません。");
        return;
      }

      // ログイン成功 → ダッシュボードへ
      router.push("/dashboard/therapist");
      router.refresh();

    } catch {
      setError("ネットワークエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 bg-white">
      <div className="w-full max-w-[420px]">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-slate-900">ログイン</h1>
          <p className="text-sm text-slate-500 mt-2">
            登録したメールアドレスとパスワードを入力してください。
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
            <AlertCircle size={18} />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6 bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">メールアドレス</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">パスワード</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition disabled:opacity-40 flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "ログイン"}
          </button>
        </form>

        {/* Register */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-sm text-slate-600">アカウントをお持ちでない方</p>

          <button
            onClick={() => router.push("/register/user")}
            className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-md text-sm hover:bg-slate-50 transition"
          >
            一般利用者として登録
          </button>

          <button
            onClick={() => router.push("/register/therapist")}
            className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-md text-sm hover:bg-slate-50 transition"
          >
            理学療法士として登録
          </button>
        </div>
      </div>
    </div>
  );
}




