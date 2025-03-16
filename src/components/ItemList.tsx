import { BASE_URL } from "@/constants/url";
import { Item } from "@/types/Items";
import { fetchVersionData } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ItemList = async ({ item }: { item: Item }) => {
  const currentVersion = await fetchVersionData();
  const itemsImageFileName: string = item.image.full;
  const itemImageURL: string = `${BASE_URL}/cdn/${currentVersion}/img/item/${itemsImageFileName}`;

  return (
    <li>
      <Image src={itemImageURL} alt={item.name} width={100} height={100} />
      <h3>{item.name}</h3>
      <p className="text-center">{item.plaintext}</p>
      <p>{item.gold.total}🪙</p>
    </li>
  );
};

export default ItemList;
