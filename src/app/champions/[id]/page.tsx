import { BASE_URL } from "@/constants/url";
import { ChampionDetail, ChampionsDetailPageProps, Passive, Spells } from "@/types/Champion";
import { fetchChampionsDetailData, fetchVersionData } from "@/utils/serverApi";
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
    <div>
      <h1>챔피언 상세</h1>
      <section>
        {arrChampionsDetailData.map((champion) => {
          return (
            <div key={champion.id}>
              <Image src={itemImageURL} alt={champion.name} width={100} height={1000} className="w-full" />
              <h3>{champion.name}</h3>
              <p>{champion.title}</p>
              <p>{champion.lore}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h1>패시브</h1>
        <Image
          src={`${BASE_URL}/cdn/${currentVersion}/img/passive/${passive.image.full}`}
          alt={passive.image.full}
          width={100}
          height={100}
        />
        <h4>{passive.name}</h4>
        <p>{passive.description}</p>
        <h1>스킬(Q,W,E,R 순서)</h1>
        <ul>
          {spells.map((spell) => {
            return (
              <li key={spell.id}>
                <Image
                  src={`${BASE_URL}/cdn/${currentVersion}/img/spell/${spell.image.full}`}
                  alt={spell.name}
                  width={100}
                  height={100}
                />
                <h4>{spell.name}</h4>
                <p>{spell.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ChampionsDetailPage;
