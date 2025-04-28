import Script from "next/script";
import { use, useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.kakao) return;
    if (!mapRef.current) return;

    window.kakao.maps.load(() => {
      const mapOptions = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      };
      new window.kakao.maps.Map(mapRef.current, mapOptions);
    });
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
      />
      <div ref={mapRef} id="map" className="w-full h-screen"></div>
    </>
  );
}
