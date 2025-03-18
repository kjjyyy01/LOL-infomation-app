import ChampionsList from "@/components/ChampionsList";
import { FLEX_COL_CENTER } from "@/constants/style";
import { Champion } from "@/types/Champion";
import { fetchChampionsData } from "@/utils/serverActions/fetchChampionsData";
import { fetchVersionData } from "@/utils/serverActions/fetchVersionData";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOLI Champions",
  description: "League of Legend Champions Information",
};

const ChampionsPage = async () => {
  const currentVersion = await fetchVersionData();
  const { championsData } = await fetchChampionsData();
  const arrChampionsData: Champion[] = Object.values(championsData.data);

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-6", "my-6", "p-10")}>
      <h1>챔피언</h1>
      <ul>
        {arrChampionsData.map((champion) => {
          return <ChampionsList key={champion.id} champion={champion} currentVersion={currentVersion} />;
        })}
      </ul>
    </div>
  );
};

export default ChampionsPage;
