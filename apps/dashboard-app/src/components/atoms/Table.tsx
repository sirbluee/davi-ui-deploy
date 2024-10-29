import React, { useState } from "react";

interface TableHeader {
  label: string;
  key: string;
}

interface TableRowData {
  [key: string]: string | number;
}

interface DataTableProps {
  headers: TableHeader[]; // Column headers
  data: TableRowData[]; // Row data
  showCheckbox?: boolean; // Control checkbox visibility
  editable?: boolean; // Control cell editability
  allowColumnSelection?: boolean; // Control if any column can be selected
  selectableColumns?: string[]; // Control which columns can be selected
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  showCheckbox = true,
  editable = true,
  allowColumnSelection = true,
  selectableColumns = [],
}) => {
  const [rows, setRows] = useState(data);
  const [editCell, setEditCell] = useState<{ rowIndex: number; key: string } | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleColumnClick = (key: string) => {
    if (allowColumnSelection && selectableColumns.includes(key)) {
      setSelectedColumns((prevSelected) =>
        prevSelected.includes(key) ? prevSelected.filter((col) => col !== key) : [...prevSelected, key]
      );
    }
  };

  const handleCellClick = (rowIndex: number, key: string) => {
    if (editable) {
      setEditCell({ rowIndex, key });
    }
  };

  const handleCheckboxChange = (rowIndex: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex],
    }));
  };

  const handleAllCheckboxChange = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    const updatedCheckedItems = rows.reduce((acc, _, index) => {
      acc[index] = newCheckedState;
      return acc;
    }, {} as { [key: number]: boolean });
    setCheckedItems(updatedCheckedItems);
  };

  const handleCellChange = (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number, key: string) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][key] = e.target.value;
    setRows(updatedRows);
  };

  const handleSaveCell = () => {
    setEditCell(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveCell();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full border-collapse border-2 border-gray-300">
              <thead className="border-2 border-gray-300">
                <tr>
                  <th className="px-6 py-4 bg-[#E6EDFF] text-left text-[22px] font-bold text-gray-500 uppercase tracking-wider border-2 border-gray-300">
                    #
                  </th>
                  {showCheckbox && (
                    <th className="px-6 py-4 bg-[#E6EDFF] border-2 border-gray-300">
                      <input
                        type="checkbox"
                        checked={allChecked}
                        onChange={handleAllCheckboxChange}
                        className="w-6 h-6 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-indigo-500 checked:border-indigo-500 focus:ring-indigo-300 focus:ring-offset-2"
                      />
                    </th>
                  )}
                  {headers.map((header) => (
                    <th
                      key={header.key}
                      onClick={() => handleColumnClick(header.key)}
                      className={`px-6 py-4 text-left text-[22px] font-bold cursor-pointer text-gray-500 bg-[#E6EDFF] uppercase tracking-wider border-2 border-gray-300 ${
                        selectedColumns.includes(header.key) ? "bg-blue-200" : ""
                      } ${
                        allowColumnSelection && selectableColumns.includes(header.key)
                          ? "cursor-pointer"
                          : "cursor-default"
                      }`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 border-2 border-gray-300">
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`transition duration-200 ${
                      checkedItems[rowIndex] ? "bg-blue-200" : "hover:bg-gray-200"
                    }`}
                  >
                    <td className="px-6 py-2 text-[18px] font-semibold text-gray-700 border-2 border-gray-300">
                      {rowIndex + 1}
                    </td>
                    {showCheckbox && (
                      <td className="px-6 py-2 border-2 border-gray-300">
                        <input
                          id={`checkbox-${rowIndex}`}
                          type="checkbox"
                          checked={!!checkedItems[rowIndex]}
                          onChange={() => handleCheckboxChange(rowIndex)}
                          className="w-6 h-6 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-indigo-500 checked:border-indigo-500 focus:ring-indigo-300 focus:ring-offset-2"
                        />
                      </td>
                    )}
                    {headers.map((header) => (
                      <td
                        key={header.key}
                        className={`px-4 text-[18px] text-gray-900 cursor-pointer w-[300px] h-[45px] border-2 border-gray-300 ${
                          selectedColumns.includes(header.key) ? "bg-gray-200" : ""
                        } ${editCell?.rowIndex === rowIndex && editCell.key === header.key ? "text-indigo-500" : ""}`}
                        onClick={() => handleCellClick(rowIndex, header.key)}
                      >
                        {editable && editCell?.rowIndex === rowIndex && editCell.key === header.key ? (
                          <input
                            type="text"
                            value={row[header.key]}
                            onChange={(e) => handleCellChange(e, rowIndex, header.key)}
                            onBlur={handleSaveCell}
                            onKeyDown={handleKeyDown}
                            className="border rounded mx-1 p-2 border-none outline-none bg-transparent"
                            autoFocus
                          />
                        ) : (
                          row[header.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
