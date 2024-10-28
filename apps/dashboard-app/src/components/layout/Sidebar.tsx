import React from "react";
import {
  FaProjectDiagram,
  FaChartBar,
  FaDatabase,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white fixed left-0 top-0 p-4">
      <nav className="mt-4">
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              <FaProjectDiagram className="mr-3" />
              Project
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              <FaChartBar className="mr-3" />
              Visualize
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              <FaDatabase className="mr-3" />
              Dataset
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              <FaQuestionCircle className="mr-3" />
              Helps
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
