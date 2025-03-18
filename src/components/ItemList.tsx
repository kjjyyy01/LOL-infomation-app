import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/constants/imageSize";
import { TEXT_CENTER } from "@/constants/style";
import { BASE_URL } from "@/constants/url";
import { Item } from "@/types/Items";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ItemList = ({ item, currentVersion }: { item: Item; currentVersion: string }) => {
  const itemsImageFileName: string = item.image.full;
  const itemImageURL: string = `${BASE_URL}/cdn/${currentVersion}/img/item/${itemsImageFileName}`;

  return (
    <li>
      <Image src={itemImageURL} alt={item.name} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
      <h3>{item.name}</h3>
      <p className={clsx(TEXT_CENTER, "md:block", "hidden")}>{item.plaintext}</p>
      <p>{item.gold.total}🪙</p>
    </li>
  );
};

export default ItemList;
