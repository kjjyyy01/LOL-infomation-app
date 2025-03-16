"use client";

import RotationChampionList from "@/components/RotationChampionList";
import { useFetchRotationFunction } from "@/hooks/useFetchRotationQuery";

const RotationPage = ({ currentVersion }: { currentVersion: string }) => {
  const { data: rotationData, isPending, isError } = useFetchRotationFunction();

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>로딩중 오류가 발생했습니다...</div>;
  }

  return (
    <div>
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
