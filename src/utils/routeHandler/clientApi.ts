"use client";

import { Champion } from "@/types/Champion";

export const fetchRotationData = async (): Promise<Champion[]> => {
  try {
    const res = await fetch("/api/rotation/");
    return await res.json();
  } catch (error) {
    console.error("아이템 데이터를 불러오는 중 오류가 발생했습니다.", error);
    throw new Error("아이템 데이터를 불러오는 중 오류가 발생했습니다.");
  }
};
