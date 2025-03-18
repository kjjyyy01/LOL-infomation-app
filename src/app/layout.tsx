import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Providers from "./provider";
import { NAV_MENUS } from "@/constants/navigate";
import { HOVER_LINK } from "@/constants/style";

export const metadata: Metadata = {
  title: "League of Legend Info",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex flex-row justify-around bg-nav_background p-4">
          <Link href={NAV_MENUS.HOME.to} className={HOVER_LINK}>
            홈
          </Link>
          <Link href={NAV_MENUS.CHAMPIONS.to} className={HOVER_LINK}>
            챔피언
          </Link>
          <Link href={NAV_MENUS.ROTATION.to} className={HOVER_LINK}>
            로테이션
          </Link>
          <Link href={NAV_MENUS.ITEMS.to} className={HOVER_LINK}>
            아이템
          </Link>
        </nav>
        <Providers>{children}</Providers>
        <footer className="sticky bottom-4 bg-nav_background m-4 p-4 rounded-lg text-center">
          LOLI는 Riot Games의 보증을 받지 않으며 Riot Games 또는 Riot Games 자산을 제작하거나 관리하는 데 공식적으로
          관여한 사람의 견해나 의견을 반영하지 않습니다. Riot Games 및 모든 관련 자산은 Riot Games, Inc.의 상표 또는
          등록 상표입니다.
        </footer>
      </body>
    </html>
  );
}
