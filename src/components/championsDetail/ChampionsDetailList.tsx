import { ChampionDetail } from "@/types/Champion";
import ChampionsDetailItems from "./ChampionsDetailItems";

const ChampionsDetailList = ({
  arrChampionsDetailData,
  currentVersion,
}: {
  arrChampionsDetailData: ChampionDetail[];
  currentVersion: string;
}) => {
  return (
    <>
      {arrChampionsDetailData.map((champion) => {
        return <ChampionsDetailItems key={champion.id} champion={champion} currentVersion={currentVersion} />;
      })}
    </>
  );
};

export default ChampionsDetailList;
