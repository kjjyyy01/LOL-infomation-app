import { SPELL_WRAPPER_STYLE } from "@/constants/style";
import { BASE_URL } from "@/constants/url";
import { ChampionDetail, Passive, Spells } from "@/types/Champion";
import { fetchVersionData } from "@/utils/serverActions/fetchVersionData";
import Image from "next/image";
import SpellItems from "./SpellItems";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/constants/imageSize";

const SpellList = async ({ arrChampionsDetailData }: { arrChampionsDetailData: ChampionDetail[] }) => {
  const currentVersion = await fetchVersionData();
  const spells: Spells[] = arrChampionsDetailData[0].spells;
  const passive: Passive = arrChampionsDetailData[0].passive;

  return (
    <>
      <div className={SPELL_WRAPPER_STYLE}>
        <Image
          src={`${BASE_URL}/cdn/${currentVersion}/img/passive/${passive.image.full}`}
          alt={passive.image.full}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
        <h3>{passive.name}</h3>
        <p className="text-start">{passive.description}</p>
      </div>
      {spells.map((spell) => {
        return <SpellItems key={spell.id} spell={spell} currentVersion={currentVersion} />;
      })}
    </>
  );
};

export default SpellList;
