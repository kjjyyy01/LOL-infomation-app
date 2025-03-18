import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/constants/imageSize";
import { FLEX_COL_CENTER } from "@/constants/style";
import { BASE_URL } from "@/constants/url";
import { ChampionDetail } from "@/types/Champion";
import clsx from "clsx";
import Image from "next/image";

const ChampionsDetailItems = ({ champion, currentVersion }: { champion: ChampionDetail; currentVersion: string }) => {
  const championsImageFileName: string = champion.image.full;
  const championImageURL: string = `${BASE_URL}/cdn/${currentVersion}/img/champion/${championsImageFileName}`;

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-4")}>
      <Image src={championImageURL} alt={champion.name} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
      <p className="text-start w-[600px] px-6 md:block hidden">{champion.lore}</p>
    </div>
  );
};

export default ChampionsDetailItems;
