import React from "react";
import BookIcon from "@/public/images/Book-icon.png";
interface ListItem {
  id: number;
  items: string;
}

interface Props {
  listItem: ListItem[];
  setSelectedItem: (item: ListItem) => void;
}

const DisplayTable: React.FC<Props> = ({ listItem, setSelectedItem }) => {
  return (
    <div className="container w-[20%] h-[700px] space-y-2 border border-[#C4C1D8] rounded-lg">
      <header className="ml-10 py-3 font-medium text-[20px]">
        Display Table
      </header>
      <ul className="space-y-3 font-medium text-[14px] ml-10">
        {listItem.map((item) => (
          <div
            className="flex justify-start items-start cursor-pointer text-center"
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <img src={BookIcon} alt="" width={24} />
            <p className="ml-2">{item.items}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTable;
