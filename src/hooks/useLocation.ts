//位置情報の取得
import { useState, useEffect } from "react";

interface LocationCoords {
  lat: number;
  lng: number;
  loading: boolean;
  error: string | null;
}

export const useLocation = () => {
  const [location, setLocation] = useState<LocationCoords>({
    lat: 33.5902, // 福岡市天神付近
    lng: 130.4017,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation(prev => ({ 
        ...prev, 
        loading: false, 
        error: "お使いのブラウザは位置情報に対応していません" 
      }));
      return;
    }

    const handleSuccess = (pos: GeolocationPosition) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        loading: false,
        error: null,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      let message = "位置情報の取得に失敗しました";
      if (error.code === 1) message = "位置情報の利用が許可されていません";
      
      setLocation(prev => ({ 
        ...prev, 
        loading: false, 
        error: message 
      }));
    };

    // 位置情報の取得（高精度オプション付き）
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }, []);

  return location;
};


