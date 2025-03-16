"use client";

import { BASE_URL } from "@/constants/url";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

const RotationChampionList = ({ champion, currentVersion }: { champion: Champion; currentVersion: string }) => {
  const championsImageFileName: string = champion.image.full;
  const championImageURL: string = `${BASE_URL}/cdn/${currentVersion}/img/champion/${championsImageFileName}`;

  return (
    <Link href={`/champions/${champion.id}`}>
      <li key={champion.name}>
        <Image src={championImageURL} alt={champion.name} width={100} height={100} />
        <h3>{champion.name}</h3>
        <p>{champion.title}</p>
      </li>
    </Link>
  );
};

export default RotationChampionList;
