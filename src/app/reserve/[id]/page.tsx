//予約ページ
"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useRouter, useParams } from "next/navigation";

const timeSlots = ["10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

export default function ReservePage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const params = useParams(); // URLから therapistId を取得

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return alert("日付と時間を選択してください");

    setIsSubmitting(true);

    // 1. 日付と時間を結合してISO形式に変換
    const [hours, minutes] = selectedTime.split(":");
    const bookingDateTime = new Date(selectedDate);
    bookingDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    try {
      // 2. 自作したAPIを叩く
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          therapistId: params.id, // URLの[id]部分
          date: bookingDateTime.toISOString(),
          price: 6000, // 本来はPTの単価を渡す
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("予約が完了しました！");
        router.push("/mypage"); // マイページへ遷移
      } else {
        alert(`エラー: ${data.error}`); // 重複チェックエラーなどの表示
      }
    } catch (error) {
      alert("通信エラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">予約日時の選択</h1>
      
      <div className="mb-6 border rounded-2xl p-4 flex justify-center shadow-sm">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          locale={ja}
          disabled={{ before: new Date() }}
        />
      </div>

      {selectedDate && (
        <div className="mb-8">
          <h2 className="font-bold mb-4 text-gray-700">開始時間を選択</h2>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-xl font-bold transition ${
                  selectedTime === time 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        disabled={!selectedDate || !selectedTime || isSubmitting}
        onClick={handleBooking}
        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg disabled:bg-gray-300"
      >
        {isSubmitting ? "処理中..." : "予約を確定する"}
      </button>
      
      <button 
        onClick={() => router.back()}
        className="w-full mt-4 text-gray-500 font-bold"
      >
        戻る
      </button>
    </div>
  );
}