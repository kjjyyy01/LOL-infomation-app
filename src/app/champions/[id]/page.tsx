import BackButton from "@/components/BackButton";
import ChampionsDetailList from "@/components/championsDetail/ChampionsDetailList";
import SpellList from "@/components/spells/SpellList";
import { FLEX_COL_CENTER } from "@/constants/style";
import { ChampionDetail, ChampionsDetailPageProps } from "@/types/Champion";
import { fetchChampionsDetailData } from "@/utils/serverActions/fetchChampionsDetailData";
import { fetchVersionData } from "@/utils/serverActions/fetchVersionData";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOLI Champion Detail",
  description: "League of Legend Champion Detail Information",
};

const ChampionsDetailPage = async ({ params }: ChampionsDetailPageProps) => {
  const { id } = params;
  const currentVersion = await fetchVersionData();
  const { championsDetailData } = await fetchChampionsDetailData(id);
  const arrChampionsDetailData: ChampionDetail[] = Object.values(championsDetailData.data);

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-12", " my-6")}>
      <BackButton />
      <section>
        <ChampionsDetailList arrChampionsDetailData={arrChampionsDetailData} currentVersion={currentVersion} />
      </section>
      <section className={clsx(FLEX_COL_CENTER, "gap-6")}>
        <h2>스킬(패시브, Q, W, E, R 순서)</h2>
        <section className="flex flex-row justify-center items-stretch px-6">
          <SpellList arrChampionsDetailData={arrChampionsDetailData} currentVersion={currentVersion} />
        </section>
      </section>
    </div>
  );
};

export default ChampionsDetailPage;
