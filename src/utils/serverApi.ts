"use server";

import { BASE_URL, VERSIONS_API_URL } from "@/constants/url";
import { ChampionDetailType, ChampionType } from "@/types/Champion";
import { ItemType } from "@/types/Items";

export const fetchVersionData = async (): Promise<string> => {
  const versionResponse = await fetch(VERSIONS_API_URL, {
    method: "GET",
    cache: "force-cache",
  });
  const versionData: string[] = await versionResponse.json();
  const currentVersion = versionData[0];

  return currentVersion;
};

export const fetchItemsData = async (): Promise<{ ItemsData: ItemType }> => {
  const currentVersion = await fetchVersionData();

  const ItemsResponse = await fetch(`${BASE_URL}/cdn/${currentVersion}/data/ko_KR/item.json`, {
    method: "GET",
    cache: "force-cache",
  });
  const ItemsData: ItemType = await ItemsResponse.json();

  return { ItemsData };
};

export const fetchChampionsData = async (): Promise<{ championsData: ChampionType }> => {
  const currentVersion = await fetchVersionData();

  const championsResponse = await fetch(`${BASE_URL}/cdn/${currentVersion}/data/ko_KR/champion.json`, {
    method: "GET",
    next: {
      revalidate: 86400,
    },
  });
  const championsData: ChampionType = await championsResponse.json();

  return { championsData };
};

export const fetchChampionsDetailData = async (cid: string): Promise<{ championsDetailData: ChampionDetailType }> => {
  const currentVersion = await fetchVersionData();

  const championsDetailResponse = await fetch(`${BASE_URL}/cdn/${currentVersion}/data/ko_KR/champion/${cid}.json`, {
    method: "GET",
    cache: "no-store",
  });

  const championsDetailData: ChampionDetailType = await championsDetailResponse.json();

  return { championsDetailData };
};
