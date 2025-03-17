import { ChampionType } from "@/types/Champion";
import { BASE_URL } from "@/constants/url";
import { fetchVersionData } from "./fetchVersionData";

export const fetchChampionsData = async (): Promise<{ championsData: ChampionType }> => {
    const currentVersion = await fetchVersionData();
  
    try {
      const championsResponse = await fetch(`${BASE_URL}/cdn/${currentVersion}/data/ko_KR/champion.json`, {
        method: "GET",
        next: {
          revalidate: 86400,
        },
      });
  
      const championsData: ChampionType = await championsResponse.json();
  
      return { championsData };
    } catch (error) {
      console.error("챔피언 데이터를 불러오는 중 오류가 발생했습니다.", error);
      throw new Error("챔피언 데이터를 불러오는 중 오류가 발생했습니다.");
    }
  };