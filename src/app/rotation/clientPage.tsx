"use client";

import RotationChampionList from "@/components/RotationChampionList";
import { FLEX_COL_CENTER } from "@/constants/style";
import { useFetchRotationFunction } from "@/hooks/useFetchRotationQuery";
import clsx from "clsx";

const RotationPage = ({ currentVersion }: { currentVersion: string }) => {
  const { data: rotationData, isPending, isError } = useFetchRotationFunction();

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>로딩중 오류가 발생했습니다...</div>;
  }

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-6 my-6")}>
      <h1>로테이션</h1>
      <ul>
        {rotationData.map((champion) => {
          return <RotationChampionList key={champion.id} champion={champion} currentVersion={currentVersion} />;
        })}
      </ul>
    </div>
  );
};

export default RotationPage;
