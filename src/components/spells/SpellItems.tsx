import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/constants/imageSize";
import { SPELL_WRAPPER_STYLE } from "@/constants/style";
import { BASE_URL } from "@/constants/url";
import { Spells } from "@/types/Champion";
import clsx from "clsx";
import Image from "next/image";

const SpellItems = ({ spell, currentVersion }: { spell: Spells; currentVersion: string }) => {
  return (
    <div className={clsx(SPELL_WRAPPER_STYLE, "px-4", "h-full")}>
      <Image
        src={`${BASE_URL}/cdn/${currentVersion}/img/spell/${spell.image.full}`}
        alt={spell.name}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
      />
      <h3>{spell.name}</h3>
      <p className="text-start md:block hidden">{spell.description}</p>
    </div>
  );
};

export default SpellItems;
