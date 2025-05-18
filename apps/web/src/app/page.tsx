"use client";

import Logo from "@packages/icon/Logo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Icon from "packages/icon/Icon";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/map");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-semibold mb-4">
        달콤한 딸기, <br />내 주변 핫한 카페에서
      </h1>
      <Logo />
    </div>
  );
}
