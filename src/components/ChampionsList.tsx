import { Champion } from "@/types/Champion";
import Image from "next/image";

const ChampionsList = ({ champion }: { champion: Champion }) => {
  const championsImageFileName: string = champion.image.full;
  const championImageURL: string = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${championsImageFileName}`;

  return (
    <li key={champion.name}>
      <Image src={championImageURL} alt={champion.name} width={100} height={100} />
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
    </li>
  );
};

export default ChampionsList;
