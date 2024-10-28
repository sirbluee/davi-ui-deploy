import React from "react";
const DisplayTable = () => {
  return (
    <div className="container w-[193px] h-[767px] space-y-2 border border-black rounded-lg">
      <header className="text-center p-3 font-medium text-[20px]">
        Display Table
      </header>
      <table className="w-full">
        <ul className="space-y-3 font-medium text-[14px] w-full ml-10">
          {/* Table1 */}
          <div className="flex">
            <span>ICON</span>
            <p>Table1</p>
          </div>

          {/* Table2 */}
          <div className="flex">
            <span>ICON</span>
            <p>Table2</p>
          </div>

          {/* Table3 */}
          <div className="flex">
            <span>ICON</span>
            <p>Table3</p>
          </div>

          {/* Table4*/}
          <div className="flex">
            <span>ICON</span>
            <p>Table4</p>
          </div>

          {/* Table5 */}
          <div className="flex">
            <span>ICON</span>
            <p>Table5</p>
          </div>
        </ul>
      </table>
    </div>
  );
};

export default DisplayTable;
