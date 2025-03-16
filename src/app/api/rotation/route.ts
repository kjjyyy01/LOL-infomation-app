import { API_KEY } from "@/constants/apiKey";
import { RIOT_DEVELOPER_ORIGIN_URL, ROTATION_API_URL } from "@/constants/url";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampionsData } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(ROTATION_API_URL, {
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: RIOT_DEVELOPER_ORIGIN_URL,
      "X-Riot-Token": API_KEY ?? "",
    },
  });
  const data: ChampionRotation = await response.json();

  const { championsData } = await fetchChampionsData();
  const arrChampionsData: Champion[] = Object.values(championsData.data);
  const freeChampionIds = data.freeChampionIds || [];
  const rotationChampions: Champion[] = arrChampionsData.filter((champion) =>
    freeChampionIds.includes(Number(champion.key))
  );

  return NextResponse.json(rotationChampions);
}
