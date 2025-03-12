import { Item } from "@/types/Items";
import Image from "next/image";
import React from "react";

const ItemList = ({ item }: { item: Item }) => {
  const imageFileName: string = item.image.full;
  const itemImageURL: string = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${imageFileName}`;
  return (
    <li>
      <Image src={itemImageURL} alt={item.name} width={100} height={100} />
      <h3>{item.name}</h3>
      <p>{item.plaintext}</p>
    </li>
  );
};

export default ItemList;
