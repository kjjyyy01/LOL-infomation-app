"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p className={ERROR_STYLE}>에러가 발생했습니다! 새로고침(F5) 해보세요!</p>
    </div>
  );
}
