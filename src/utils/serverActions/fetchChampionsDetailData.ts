"use server";

import { BASE_URL } from "@/constants/url";
import { ChampionDetailType } from "@/types/Champion";
import { fetchVersionData } from "./fetchVersionData";

export const fetchChampionsDetailData = async (cid: string): Promise<{ championsDetailData: ChampionDetailType }> => {
  const currentVersion = await fetchVersionData();

  try {
    const championsDetailResponse = await fetch(`${BASE_URL}/cdn/${currentVersion}/data/ko_KR/champion/${cid}.json`, {
      method: "GET",
      cache: "no-store",
    });

    const championsDetailData: ChampionDetailType = await championsDetailResponse.json();

    return { championsDetailData };
  } catch (error) {
    console.error("챔피언 상세정보 데이터를 불러오는 중 오류가 발생했습니다.", error);
    throw new Error("챔피언 상세정보 데이터를 불러오는 중 오류가 발생했습니다.");
  }
};
