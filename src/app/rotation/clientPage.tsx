"use client";

import RotationChampionList from "@/components/RotationChampionList";
import { ERROR_STYLE, FLEX_COL_CENTER, LOAD_STYLE } from "@/constants/style";
import { useFetchRotationFunction } from "@/hooks/query/useFetchRotationQuery";
import clsx from "clsx";

const RotationPage = ({ currentVersion }: { currentVersion: string }) => {
  const { data: rotationData, isPending, isError } = useFetchRotationFunction();

  if (isPending) {
    return <div className={LOAD_STYLE}>로딩중...</div>;
  }

  if (isError) {
    return <div className={ERROR_STYLE}>에러가 발생했습니다! 새로고침(F5) 해보세요!</div>;
  }

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-6", "my-6", "p-2")}>
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
