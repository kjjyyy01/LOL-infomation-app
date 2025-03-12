import ChampionsList from "@/components/ChampionsList";
import { Champion } from "@/types/Champion";
import { fetchChampionsData } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "League of Legend Champions",
  description: "League of Legend Champions Information",
};

const ChampionsPage = async () => {
  const { championsData } = await fetchChampionsData();
  const arrChampionsData: Champion[] = Object.values(championsData.data);

  return (
    <div>
      <h1>챔피언</h1>
      <ul>
        {arrChampionsData.map((champion) => {
          return <ChampionsList key={champion.name} champion={champion} />;
        })}
      </ul>
    </div>
  );
};

export default ChampionsPage;
