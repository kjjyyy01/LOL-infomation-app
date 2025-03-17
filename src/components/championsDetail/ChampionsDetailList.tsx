import { ChampionDetail } from "@/types/Champion";
import ChampionsDetailItems from "./ChampionsDetailItems";

const ChampionsDetailList = ({
  arrChampionsDetailData,
  id,
}: {
  arrChampionsDetailData: ChampionDetail[];
  id: string;
}) => {
  return (
    <>
      {arrChampionsDetailData.map((champion) => {
        return <ChampionsDetailItems key={champion.id} champion={champion} id={id} />;
      })}
    </>
  );
};

export default ChampionsDetailList;
