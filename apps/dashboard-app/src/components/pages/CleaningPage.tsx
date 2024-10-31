import React from "react";
import Button from "../atoms/Button";
import icon from "@/public/images/icon-cleaning.png";
import TableTest from "../atoms/TableTest";

const CleaningPage = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center mb-3">
        {/* Content Left */}
        <div className="flex flex-row gap-x-3">
          <div className="flex rounded-full bg-[#F4EBFF] w-14 h-1w-14 justify-center items-center">
            <img src={icon} alt="" className="w- h-6" />
          </div>
          <div>
            <h2 className="font-bold">Employee Survey.CSV</h2>
            <div className="bg-[#E6EDFF] border-2 border-[#E6EDFF] flex flex-row justify-between rounded-lg px-4 min-w-56 max-w-64">
              <div className="flex flex-row">
                <p className="">36</p>
                <p className="border-r-2 border-black ml-3"> Rows</p>
              </div>
              <div className="flex flex-row">
                <p className="">36</p>
                <p className="ml-3"> Columns</p>
              </div>
            </div>
          </div>
        </div>
        {/* Content Right */}
        <Button
          children={"Download"}
          size="medium"
          radius="2xl"
          isLoading={false}
          color="outline"
          isIconOnly={false}
        />
      </div>
      <TableTest />
      <div className="flex justify-end items-center gap-x-4 mr-2 mt-6">
        <Button
          children={"Tranform"}
          size="medium"
          radius="2xl"
          isLoading={false}
          color="outline"
          isIconOnly={false}
        />
        <Button
          children={"Next"}
          size="medium"
          radius="2xl"
          isLoading={false}
          color="secondary"
          isIconOnly={false}
        />
      </div>
    </div>
  );
};

export default CleaningPage;
