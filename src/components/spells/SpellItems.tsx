import { SPELL_WRAPPER_STYLE } from "@/constants/style";
import { BASE_URL } from "@/constants/url";
import { Spells } from "@/types/Champion";
import Image from "next/image";

const SpellItems = ({ spell, currentVersion }: { spell: Spells; currentVersion: string }) => {
  return (
    <div className={SPELL_WRAPPER_STYLE}>
      <Image
        src={`${BASE_URL}/cdn/${currentVersion}/img/spell/${spell.image.full}`}
        alt={spell.name}
        width={100}
        height={100}
      />
      <h3>{spell.name}</h3>
      <p className="text-start">{spell.description}</p>
    </div>
  );
};

export default SpellItems;
