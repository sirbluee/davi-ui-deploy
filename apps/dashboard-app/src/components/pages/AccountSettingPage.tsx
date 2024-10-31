import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const AccountSettingPage: React.FC = () => {
  return (
    <div
      id="account_setting"
      className="p-4 bg-gray-50 min-h-screen w-[1000px]"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Account Setting
      </h2>

      {/* Profile Details Section here*/}
      <div className="bg-gray-50 shadow-sm rounded-lg pt-3 mb-6 border-2 border-gray-200">
        <div className="flex justify-between items-center mb-4 px-5">
          <h3 className="text-lg font-medium text-gray-700">Profile Details</h3>
          <button className="bg-[#443DFF] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
            Save Change
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-br-lg rounded-bl-lg gap-4 bg-white border-t-2 border-gray-200 py-4 px-5">
          <div>
            <label className="block text-base font-normal text-gray-600 mb-1 ">
              First name
            </label>
            <input
              type="text"
              placeholder=""
              required
              className="mt-1 w-full text-gray-700 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-base font-normal text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder=""
              className="mt-1 w-full text-gray-700 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <p className="text-sm text-gray-500">Create on 12/12/2024</p>
        </div>
      </div>

      {/* Email Section */}
      <div className="bg-gray-50 shadow-sm rounded-lg pt-3 mb-6 border-2 border-gray-200">
        <h3 className="text-lg font-medium text-gray-700 mb-2 px-5">Email</h3>
        <div className="bg-white px-5 py-4 border-t-2 rounded-br-lg rounded-bl-lg border-gray-200">
          <p className="text-gray-800 mb-1">KImkim@gmail.com</p>
          <p className="text-sm text-gray-500 mb-1">
            Your account is authenticated through Google.
          </p>
        </div>
      </div>

      {/* Login Management Section */}
      <div className="bg-gray-50 shadow-sm rounded-lg pt-3 mb-6 border-2 border-gray-200">
        <div className="flex justify-between items-center mb-2 px-5">
          <h3 className="text-lg font-medium text-gray-700">
            Login Management
          </h3>
          <button className="bg-[#443DFF] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center hover:bg-blue-600 transition">
            <AiOutlineLogout size={16} className="mt-[3px] mr-1" />
            Log Out
          </button>
        </div>
        <p className="bg-white border-t-2 border-gray-200 rounded-br-lg rounded-bl-lg text-sm text-gray-500 py-5 px-5">
          Sign out across all browsers. You will need to sign back in anywhere
          you’d like to use DAVI.
        </p>
      </div>
    </div>
  );
};

export default AccountSettingPage;
