"use client";

import { logo } from "@packages/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/map");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h1 className="text-2xl font-semibold mb-4">
        달콤한 딸기, <br />내 주변 핫한 카페에서
      </h1>
      <img src={logo.src} alt="로고" className="w-32 h-32" />
    </div>
  );
}
