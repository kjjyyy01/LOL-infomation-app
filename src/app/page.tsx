import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LOLI",
  description: "League of Legend Information Homepage",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 my-6">
      <h1>LOLI</h1>
      <p className="text-center text-lg">
        League of Legend Information에 오신것을 환영합니다.
        <br /> 최신 리그오브레전드 챔피언과 아이템 정보를 한눈에 볼 수 있습니다.
        <br /> 필요한 정보가 있다면, 찾아보세요!!
      </p>
      <section>
        <Link href={"/champions"} className="hover:underline">
          챔피언
          <Image
            src={"/image/homeImage1.png"}
            alt="챔피언 페이지 링크 이미지"
            width={500}
            height={100}
            className="rounded-md"
          />
        </Link>
        <br />
        <Link href={"/items"} className="hover:underline">
          아이템
          <Image
            src={"/image/homeImage2.png"}
            alt="아이템 페이지 링크 이미지"
            width={500}
            height={100}
            className="rounded-md"
          />
        </Link>
        <br />
        <Link href={"/rotation"} className="hover:underline">
          로테이션
          <Image
            src={"/image/homeImage3.png"}
            alt="로테이션 페이지 링크 이미지"
            width={500}
            height={100}
            className="rounded-md"
          />
        </Link>
      </section>
    </div>
  );
}
