"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <Button onClick={handleBack}>뒤로가기</Button>;
};
export default BackButton;
