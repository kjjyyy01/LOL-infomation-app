"use server";

import { VERSIONS_API_URL } from "@/constants/url";
import { ItemData } from "@/types/Items";

export const fetchVersionData = async (): Promise<string> => {
  const versionResponse = await fetch(VERSIONS_API_URL,{
    method:"GET",
    cache:"force-cache",
  });
  const versionData: string[] = await versionResponse.json();
  const currentVersion = versionData[0];

  return currentVersion;
};

export const fetchItemsData = async (): Promise<{ ItemsData: ItemData }> => {
  const currentVersion = await fetchVersionData();

  const ItemsResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/${currentVersion}/data/ko_KR/item.json`, {
    method: "GET",
    cache: "force-cache",
  });
  const ItemsData: ItemData = await ItemsResponse.json();

  return { ItemsData };
};
