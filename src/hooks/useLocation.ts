//位置情報の取得
import { useState, useEffect } from "react";

export const useLocation = () => {
  const [coords, setCoords] = useState({ lat: 35.68, lng: 139.76 }); // 初期値は東京
  useEffect(() => {
    // ブラウザの機能で現在地を取得
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);
  return coords;
};