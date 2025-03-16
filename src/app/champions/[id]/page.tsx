import { FLEX_COL_CENTER, WRAPPER_STYLE } from "@/constants/style";
import { BASE_URL } from "@/constants/url";
import { ChampionDetail, ChampionsDetailPageProps, Passive, Spells } from "@/types/Champion";
import { fetchChampionsDetailData, fetchVersionData } from "@/utils/serverApi";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LOLI Champion Detail",
  description: "League of Legend Champion Detail Information",
};

const ChampionsDetailPage = async ({ params }: ChampionsDetailPageProps) => {
  const currentVersion = await fetchVersionData();
  const { id } = params;
  const { championsDetailData } = await fetchChampionsDetailData(id);
  const arrChampionsDetailData: ChampionDetail[] = Object.values(championsDetailData.data);
  const itemImageURL: string = `${BASE_URL}/cdn/img/champion/splash/${id}_0.jpg`;
  const spells: Spells[] = arrChampionsDetailData[0].spells;
  const passive: Passive = arrChampionsDetailData[0].passive;

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-6", " my-6")}>
      <h1>챔피언 상세</h1>
      <section>
        {arrChampionsDetailData.map((champion) => {
          return (
            <div key={champion.id} className={clsx(FLEX_COL_CENTER, "gap-4")}>
              <Image src={itemImageURL} alt={champion.name} width={100} height={100} className="w-[700px]" />
              <h3>{champion.name}</h3>
              <p>{champion.title}</p>
              <p className="text-center">{champion.lore}</p>
            </div>
          );
        })}
      </section>
      <section className={clsx(FLEX_COL_CENTER, "gap-6")}>
        <h2>스킬(패시브, Q, W, E, R 순서)</h2>
        <section className="flex flex-row justify-center items-center">
          <div className={WRAPPER_STYLE}>
            <Image
              src={`${BASE_URL}/cdn/${currentVersion}/img/passive/${passive.image.full}`}
              alt={passive.image.full}
              width={100}
              height={100}
            />
            <h3>{passive.name}</h3>
            <p className="text-start">{passive.description}</p>
          </div>
          {spells.map((spell) => {
            return (
              <div key={spell.id} className={WRAPPER_STYLE}>
                <Image
                  src={`${BASE_URL}/cdn/${currentVersion}/img/spell/${spell.image.full}`}
                  alt={spell.name}
                  width={100}
                  height={100}
                />
                <h3>{spell.name}</h3>
                <p className="text-start">{spell.description}</p>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default ChampionsDetailPage;
