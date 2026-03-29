"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, MapPin, ChevronLeft } from "lucide-react";

export default function TherapistProfileRegistration() {
  const router = useRouter();

  const [loadingLocation, setLoadingLocation] = useState(false);
  const [isLocationSet, setIsLocationSet] = useState(false);

  const [formData, setFormData] = useState({
    specialty: "運動器リハビリテーション",
    experience: 5,
    message: "",
    lat: 33.5897, // 福岡（博多）
    lng: 130.4207,
  });

  const getCurrentLocation = () => {
    setLoadingLocation(true);

    if (!navigator.geolocation) {
      alert("お使いのブラウザは位置情報に対応していません。");
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData({
          ...formData,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLocationSet(true);
        setLoadingLocation(false);
      },
      () => {
        alert("位置情報の取得に失敗しました。");
        setLoadingLocation(false);
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/dashboard/therapist");
    } else {
      alert("プロフィール登録に失敗しました。");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[480px] px-6 py-4 flex items-center gap-3 border-b border-slate-200">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ChevronLeft size={20} />
          <span className="text-sm">戻る</span>
        </button>
      </header>

      {/* Main */}
      <main className="w-full max-w-[480px] px-6 py-10 flex-1">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          プロフィール登録
        </h1>

        <p className="text-sm text-slate-500 mb-10 leading-relaxed">
          利用者に表示される専門分野や活動エリアを登録します。
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Specialty */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">専門分野</label>
            <select
              value={formData.specialty}
              onChange={(e) =>
                setFormData({ ...formData, specialty: e.target.value })
              }
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>運動器リハビリテーション</option>
              <option>脳血管リハビリテーション</option>
              <option>訪問リハビリテーション</option>
              <option>スポーツリハビリテーション</option>
              <option>小児リハビリテーション</option>
              <option>ウィメンズヘルス</option>
            </select>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">経験年数</label>
            <input
              type="number"
              min={0}
              value={formData.experience}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experience: Number(e.target.value),
                })
              }
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">活動エリア（位置情報）</label>

            <button
              type="button"
              onClick={getCurrentLocation}
              className={`w-full p-6 rounded-lg border text-sm flex items-center justify-center gap-3 transition ${
                isLocationSet
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-slate-50 border-slate-200 hover:bg-blue-50"
              }`}
            >
              {loadingLocation ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <MapPin size={20} />
              )}
              {isLocationSet ? "位置情報を設定しました" : "現在地を取得する"}
            </button>

            {isLocationSet && (
              <p className="text-xs text-slate-500">
                緯度: {formData.lat.toFixed(4)} / 経度: {formData.lng.toFixed(4)}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm text-slate-700">紹介文</label>
            <textarea
              placeholder="あなたの得意分野やリハビリへの想いを記入してください。"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none min-h-[150px] resize-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            登録する
          </button>
        </form>
      </main>
    </div>
  );
}

