"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type LocationType = {
  lat: number;
  lng: number;
};

const defaultLocation = {
  lat: 37.4979,
  lng: 127.0276,
};

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<LocationType>(defaultLocation);

  useEffect(() => {
    if (!window.kakao) return;
    if (!mapRef.current) return;
    if (!navigator.geolocation) {
      setLocation(defaultLocation);
      return;
    }

    const { kakao } = window;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
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
        }
      },
      {
        enableHighAccuracy: true, // 위치정보의 정확도를 높이는 옵션
        timeout: 5000, // 선택 위치 요청 제한시간 3초
      }
    );

    kakao.maps.load(() => {
      const mapOptions = {
        center: new kakao.maps.LatLng(location.lat, location.lng),
        level: 3,
      };
      new kakao.maps.Map(mapRef.current, mapOptions);
    });
  });

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        onLoad={() => {
          window.kakao.maps.load(() => {});
        }}
      />
      <div ref={mapRef} id="map" className="w-full h-screen"></div>
    </>
  );
}
