import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("users");
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-55 bg-green-200 flex flex-col pt-8 pb-5">
        <div className="flex flex-col items-center">
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png?v=2025030913"
            alt="User Avatar"
            className="w-12 h-12 rounded-full mb-1"
          />
          <span className="text-lg font-semibold">Hello, Nazarov</span>
        </div>
        <nav className="mt-15 ml-auto">
          <ul className="pl-10">
            <li
              className={`p-2 rounded-tl-lg rounded-bl-lg flex items-center gap-2 cursor-pointer ${
                activeTab === "Dashboard"
                  ? "bg-gray-500 pr-[70px] text-white"
                  : ""
              }`}
              onClick={() => setActiveTab("Dashboard")}
            >
              <LuLayoutDashboard /> Dashboard
            </li>
            <li
              className={`p-2 rounded-tl-lg rounded-bl-lg flex items-center gap-2 cursor-pointer ${
                activeTab === "Create"
                  ? "bg-gray-500 pr-[100px] text-white"
                  : ""
              }`}
              onClick={() => setActiveTab("Create")}
            >
              <IoMdAddCircleOutline />
              Create
            </li>
            <li
              className={`p-2 rounded-tl-lg rounded-bl-lg flex items-center gap-2 cursor-pointer ${
                activeTab === "Settings"
                  ? "bg-gray-500 pr-[80px] text-white"
                  : ""
              }`}
              onClick={() => setActiveTab("Settings")}
            >
              <IoIosSettings />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 p-6"></main>
      {/* Main Content */}

      {/* Users Panel */}
      <aside className="w-64 bg-green-200 p-4">
        <h2 className="font-bold text-lg">Users:</h2>
        <ul className="mt-4 space-y-2">
          <li className="p-2 bg-white rounded-lg flex items-center">
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png?v=2025030913"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="ml-2">Nazarov</span>
          </li>
        </ul>
        {/* Users Panel */}
      </aside>
    </div>
  );
}

export default Home;
