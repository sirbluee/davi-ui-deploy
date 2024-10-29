import DataTable from "@/src/components/atoms/Table";
import "@/src/styles.css";
import { initialData, tableHeaders } from "./data/tableMock";
export const App = () => {
  return (
    <div className="-screen flex flex-col justify-center items-center">
      <DataTable
        headers={tableHeaders}
        data={initialData}
        showCheckbox={true}
        editable={false}
        allowColumnSelection={false}
        selectableColumns={["country", "population"]}
      />
    </div>
  );
};