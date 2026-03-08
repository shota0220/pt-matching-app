//詳細プロフィール登録画面
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileRegistration() {
  const router = useRouter();
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [formData, setFormData] = useState({
    specialty: "運動器",
    experience: 5,
    message: "",
    lat: 33.5897, // デフォルト：博多駅
    lng: 130.4207,
  });

  // 現在地を取得する関数
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
        setLoadingLocation(false);
        alert("活動拠点を現在地に設定しました！");
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
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/results"); // 完了後、検索結果画面へ
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 border border-gray-100">
      <h1 className="text-2xl font-bold mb-2 text-blue-600">プロフィール作成</h1>
      <p className="text-sm text-gray-500 mb-6">患者様に表示される詳細情報を入力してください。</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold mb-1">専門分野</label>
          <select 
            className="w-full p-3 border rounded-lg bg-gray-50"
            value={formData.specialty}
            onChange={(e) => setFormData({...formData, specialty: e.target.value})}
          >
            <option>運動器</option>
            <option>中枢神経</option>
            <option>訪問リハ</option>
            <option>スポーツ</option>
            <option>ウィメンズヘルス</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-bold mb-1">経験年数（年）</label>
          <input 
            type="number" 
            className="w-full p-3 border rounded-lg bg-gray-50"
            placeholder="例: 10"
            onChange={(e) => setFormData({...formData, experience: parseInt(e.target.value)})} 
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">活動拠点の登録</label>
          <button 
            type="button"
            onClick={getCurrentLocation}
            className={`w-full p-3 rounded-lg border-2 border-dashed ${loadingLocation ? 'bg-gray-100' : 'border-blue-300 text-blue-600 hover:bg-blue-50'} transition`}
          >
            {loadingLocation ? "取得中..." : "📍 現在地を活動拠点にする"}
          </button>
          <p className="text-[10px] text-gray-400 mt-1">※この位置が検索結果の地図に表示されます。</p>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">自己紹介文</label>
          <textarea 
            className="w-full p-3 border rounded-lg bg-gray-50" 
            rows={4}
            placeholder="患者様へのメッセージを入力してください..."
            onChange={(e) => setFormData({...formData, message: e.target.value})} 
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold text-lg shadow-blue-200 shadow-lg hover:bg-blue-700 transition">
          登録を完了して公開する
        </button>
      </form>
    </div>
  );
}