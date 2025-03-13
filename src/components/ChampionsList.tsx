import { BASE_URL } from "@/constants/url";
import { Champion } from "@/types/Champion";
import { fetchVersionData } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const ChampionsList = async ({ champion }: { champion: Champion }) => {
  const currentVersion = await fetchVersionData();
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

export default ChampionsList;
