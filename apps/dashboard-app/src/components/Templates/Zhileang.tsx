import ShowTable from "@/src/components/Templates/ShowTable";
import { useState } from "react";
import DisplayTable from "@/src/components/Templates/DisplayTable";
const initialList = [
  { id: 1, items: "Item1" },
  { id: 2, items: "Item2" },
  { id: 3, items: "Item3" },
  { id: 4, items: "Item4" },
  { id: 5, items: "Item5" },
];
interface ListItem {
  id: number;
  items: string;
}
const Zhileang = () => {
  const [listItem] = useState(initialList); // Fixed list

  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  return (
    <div className="flex mx-5 mt-5">
      <DisplayTable listItem={listItem} setSelectedItem={setSelectedItem} />
      <ShowTable selectedItem={selectedItem} />
    </div>
  );
};

export default Zhileang;
