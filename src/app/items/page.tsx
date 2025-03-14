import ItemList from "@/components/ItemList";
import { Item } from "@/types/Items";
import { fetchItemsData } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOLI Items",
  description: "League of Legend Items Information",
};

const ItemsPage = async () => {
  const { ItemsData } = await fetchItemsData();
  const arrItemsData: Item[] = Object.values(ItemsData.data);

  return (
    <div>
      <h1>아이템</h1>
      <ul>
        {arrItemsData.map((item) => {
          return <ItemList key={item.name} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ItemsPage;
