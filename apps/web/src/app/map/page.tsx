"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  const handleFindMyLocation = () => {
    if (!navigator.geolocation) {
      alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const locPosition = new window.kakao.maps.LatLng(latitude, longitude);

        if (mapInstance.current) {
          mapInstance.current.setCenter(locPosition);
        }
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("위치 정보 접근이 거부되었습니다. 브라우저 설정을 확인해주세요.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("위치 정보가 제공되지 않습니다. 네트워크 상태를 확인해주세요.");
            break;
          case error.TIMEOUT:
            alert("위치 정보 요청이 시간 초과되었습니다. 다시 시도해주세요.");
            break;
          default:
            alert("알 수 없는 에러가 발생했습니다." + error.message);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  };

  useEffect(() => {
    if (!isKakaoLoaded || !window.kakao || !mapRef.current) return;

    const { kakao } = window;

    kakao.maps.load(() => {
      const mapOptions = {
        center: new kakao.maps.LatLng(37.4979, 127.0276), // 강남역
        level: 3,
      };
      const map = new kakao.maps.Map(mapRef.current, mapOptions);
      mapInstance.current = map;
      setIsMapLoaded(true);
      handleFindMyLocation();
    });
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        onLoad={() => {
          window.kakao.maps.load(() => {
            setIsKakaoLoaded(true);
          });
        }}
      />
      <div className="relative w-full h-screen">
        <div ref={mapRef} id="map" className="w-full h-screen" />
        {isMapLoaded && (
          <button
            className="absolute bottom-10 left-5 p-2 bg-white border rounded shadow z-10"
            onClick={handleFindMyLocation}
          >
            📍 현재 위치
          </button>
        )}
      </div>
    </>
  );
}
