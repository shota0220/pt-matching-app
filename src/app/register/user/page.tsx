"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ChevronLeft } from "lucide-react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [symptom, setSymptom] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("必須項目を入力してください。");
      return;
    }

    if (password.length < 6) {
      alert("パスワードは6文字以上で設定してください。");
      return;
    }

    setLoading(true);

    try {
      // ① 一般利用者アカウント作成
      const response = await fetch("/api/register/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, symptom }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "登録に失敗しました。");
      }

      // ② 自動ログイン（最重要）
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      // ③ 一般利用者ダッシュボードへ
      router.push("/user/dashboard");

    } catch (error: any) {
      alert(error.message || "通信エラーが発生しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[480px] px-6 py-4 flex items-center gap-3 border-b border-slate-200">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ChevronLeft size={20} />
          <span className="text-sm">ログインへ戻る</span>
        </button>
      </header>

      {/* Main */}
      <main className="w-full max-w-[480px] px-6 py-10 flex-1">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">新規登録</h1>

        <p className="text-sm text-slate-500 mb-10 leading-relaxed">
          利用者として必要な情報を入力してください。
        </p>

        <form onSubmit={handleFormSubmit} className="space-y-8">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">氏名</label>
            <input
              placeholder="福岡 太郎"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">メールアドレス</label>
            <input
              type="email"
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">パスワード</label>
            <input
              type="password"
              placeholder="6文字以上の英数字"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          {/* Symptom */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">現在の症状（任意）</label>
            <textarea
              placeholder="例：慢性的な腰痛、スポーツ後の膝の痛みなど"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none min-h-[120px] resize-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-40"
          >
            {loading ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              "登録する"
            )}
          </button>
        </form>
      </main>
    </div>
  );
}



