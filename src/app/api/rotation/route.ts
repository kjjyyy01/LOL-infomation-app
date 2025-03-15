import { API_KEY } from "@/constants/apiKey";
import { RIOT_DEVELOPER_ORIGIN_URL, ROTATION_API_URL } from "@/constants/url";
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
  const data = await response.json();

  return NextResponse.json(data);
}
