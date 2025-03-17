import { FLEX_COL_CENTER, TEXT_CENTER } from "@/constants/style";
import { BASE_URL } from "@/constants/url";
import { ChampionDetail } from "@/types/Champion";
import clsx from "clsx";
import Image from "next/image";

const ChampionsDetailItems = ({ champion, id }: { champion: ChampionDetail; id: string }) => {
  const itemImageURL: string = `${BASE_URL}/cdn/img/champion/splash/${id}_0.jpg`;

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-4")}>
      <Image src={itemImageURL} alt={champion.name} width={100} height={100} className="w-[700px]" />
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
      <p className={TEXT_CENTER}>{champion.lore}</p>
    </div>
  );
};

export default ChampionsDetailItems;
