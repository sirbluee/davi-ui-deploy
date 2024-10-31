interface ShowTableProps {
  selectedItem: { items: string } | null;
}

const ShowTable = ({ selectedItem }: ShowTableProps) => {
  return (
    <div className="container w-full ml-5 border border-[#C4C1D8] rounded-lg">
      <div className="p-10 h-full">
        {selectedItem ? (
          <header className="font-medium text-[18px]">
            {selectedItem.items}
          </header>
        ) : (
          <div className="flex justify-center items-center text-center h-full text-[#BDBBCB]">
            No item select for preview
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowTable;
