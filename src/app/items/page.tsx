import ItemList from "@/components/ItemList";
import { FLEX_COL_CENTER } from "@/constants/style";
import { Item } from "@/types/Items";
import { fetchItemsData } from "@/utils/serverActions/fetchItemsData";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOLI Items",
  description: "League of Legend Items Information",
};

const ItemsPage = async () => {
  const { ItemsData } = await fetchItemsData();
  const arrItemsData: Item[] = Object.values(ItemsData.data);

  return (
    <div className={clsx(FLEX_COL_CENTER, "gap-6 my-6")}>
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
