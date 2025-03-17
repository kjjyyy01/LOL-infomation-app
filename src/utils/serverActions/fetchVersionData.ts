"use server";

import { VERSIONS_API_URL } from "@/constants/url";

export const fetchVersionData = async (): Promise<string> => {
  const versionResponse = await fetch(VERSIONS_API_URL, {
    method: "GET",
    cache: "force-cache",
  });
  const versionData: string[] = await versionResponse.json();
  const currentVersion = versionData[0];

  return currentVersion;
};
