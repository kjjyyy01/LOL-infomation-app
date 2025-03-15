"use client";

import { ChampionRotation } from "@/types/ChampionRotation";

export const fetchRotationData = async (): Promise<ChampionRotation> => {
  const res = await fetch("api/rotation/");
  return await res.json();
};
