import React from "react";
import GraphIcon from "@/public/images/header/graph.png";
import VisualizeIcon from "@/public/images/header/diagram.png";
import DatasetIcon from "@/public/images/header/home-hashtag.png";
import HelpIcon from "@/public/images/header/messages-2.png";

interface MenuItem {
  name: string;
  icon: string;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Project",
    icon: GraphIcon,
    link: "#",
  },
  {
    name: "Visualize",
    icon: VisualizeIcon,
    link: "#",
  },
  {
    name: "Dataset",
    icon: DatasetIcon,
    link: "#",
  },
  {
    name: "Helps",
    icon: HelpIcon,
    link: "#",
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[120px] h-full bg-white shadow-md text-black fixed left-0 top-14 px-8">
      <nav className="mt-8">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-6">
              <a
                href={item.link}
                className="flex flex-col items-center p-2 text-black hover:text-blue-500 rounded"
              >
                <img src={item.icon} alt={item.name} width={30} height={30} />
                <span className="mt-2 text-sm font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
