interface TravelEstimate {
  duration: number; // 分
  distance: string; // "5.4 km"
}

// Haversine（直線距離）計算
function calcFallbackDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceKm = R * c;

  return distanceKm;
}

function roundCoord(value: number, precision = 2) {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}

export type TravelMode = "driving" | "walking" | "transit";

export async function getTravelTime(
  originLat: number,
  originLng: number,
  destLat: number,
  destLng: number,
  mode: TravelMode = "driving"
): Promise<TravelEstimate | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  // ① APIキーが無い → 直線距離モード
  if (!apiKey) {
    const distKm = calcFallbackDistance(originLat, originLng, destLat, destLng);
    const duration = Math.ceil((distKm / 0.4) * 10); // 0.4km を 10分 として換算（徒歩換算）

    return {
      duration,
      distance: `${distKm.toFixed(2)} km`,
    };
  }

  // ② APIキーがある → Google Maps を使う（サーバーサイド想定）
  try {
    const oLat = roundCoord(originLat);
    const oLng = roundCoord(originLng);
    const dLat = roundCoord(destLat);
    const dLng = roundCoord(destLng);

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${oLat},${oLng}&destinations=${dLat},${dLng}&mode=${mode}&key=${apiKey}&language=ja`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Distance Matrix API HTTP error: ${response.status}`);
    }

    const data = await response.json();

    const element = data?.rows?.[0]?.elements?.[0];
    if (data.status === "OK" && element?.status === "OK") {
      return {
        duration: Math.ceil(element.duration.value / 60),
        distance: element.distance.text,
      };
    }

    console.warn("⚠️ Distance Matrix API returned non-OK status:", element?.status ?? data?.status);

    const distKm = calcFallbackDistance(originLat, originLng, destLat, destLng);
    return {
      duration: Math.ceil((distKm / 0.4) * 10),
      distance: `${distKm.toFixed(2)} km`,
    };
  } catch (error) {
    console.error("🚨 Google Maps API Fetch Error:", error);

    const distKm = calcFallbackDistance(originLat, originLng, destLat, destLng);
    return {
      duration: Math.ceil((distKm / 0.4) * 10),
      distance: `${distKm.toFixed(2)} km`,
    };
  }
}
