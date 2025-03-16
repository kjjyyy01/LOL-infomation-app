"use client";

import { Champion } from "@/types/Champion";

export const fetchRotationData = async (): Promise<Champion[]> => {
  const res = await fetch("api/rotation/");
  return await res.json();
};
