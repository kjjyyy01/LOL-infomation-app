import { ItemType } from "@/types/Items";
import { BASE_URL } from "@/constants/url";
import { fetchVersionData } from "./fetchVersionData";

export const fetchItemsData = async (): Promise<{ ItemsData: ItemType }> => {
  const currentVersion = await fetchVersionData();

  try {
    const ItemsResponse = await fetch(`${BASE_URL}/cdn/${currentVersion}/data/ko_KR/item.json`, {
      method: "GET",
      cache: "force-cache",
    });
    const ItemsData: ItemType = await ItemsResponse.json();

    return { ItemsData };
  } catch (error) {
    console.error("아이템 데이터를 불러오는 중 오류가 발생했습니다.", error);
    throw new Error("아이템 데이터를 불러오는 중 오류가 발생했습니다.");
  }
};
