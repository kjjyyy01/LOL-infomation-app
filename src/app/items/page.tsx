import ItemList from "@/components/ItemList";
import { fetchItemsData } from "@/utils/serverApi";

const ItemsPage = async () => {
  const { ItemsData } = await fetchItemsData();
  const arrItemsData = Object.values(ItemsData.data);

  return (
    <div>
      <h1>ItemsPage</h1>
      <ul>
        {arrItemsData.map((item) => {
          return <ItemList key={item.name} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ItemsPage;
