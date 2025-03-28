"use client";

import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Home() {
  const { data: users, isLoading } = useCollection("users");
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { user } = useSelector((state) => state.user);

  const getTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <>
            <div className="flex items-center justify-between p-4">
              <h2>Home</h2>
              <NavLink className={"btn btn-primary"} to="/login">
                Login
              </NavLink>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
              <h2 className="text-2xl font-bold mb-4">
                Welcome to your Dashboard
              </h2>
              <p className="text-gray-300">
                Hello {user?.displayName}, this is your personal dashboard where
                you can manage your account and activities.
              </p>
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-lg mb-2">
                  Your Account Details
                </h3>
                <p>
                  <span className="font-medium">Email:</span> {user?.email}
                </p>
                <p>
                  <span className="font-medium">Display Name:</span>
                  {user?.displayName}
                </p>
              </div>
            </div>
          </>
        );
      case "Create":
        return (
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4">Create New Content</h2>
            <p className="text-gray-300">
              This is where you can create new content.
            </p>
          </div>
        );
      case "Settings":
        return (
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
            <p className="text-gray-300">Manage your account settings here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-black">
      <aside className="w-55 bg-gray-900 flex flex-col pt-8 pb-5 text-white">
        <div className="flex flex-col items-center">
          <img
            src={
              user?.photoURL ||
              "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png?v=2025030913"
            }
            alt="User Avatar"
            className="w-12 h-12 rounded-full mb-1"
          />
          <span className="text-lg font-semibold">
            Hello, {user?.displayName}
          </span>
        </div>
        <nav className="mt-15">
          <ul className="pl-10">
            <li
              className={`p-2 rounded-tl-lg rounded-bl-lg flex items-center gap-2 cursor-pointer ${
                activeTab === "Dashboard"
                  ? "bg-gray-700 pr-[70px] text-white"
                  : ""
              }`}
              onClick={() => setActiveTab("Dashboard")}
            >
              <LuLayoutDashboard /> Dashboard
            </li>
            <li
              className={`p-2 rounded-tl-lg rounded-bl-lg flex items-center gap-2 cursor-pointer ${
                activeTab === "Create"
                  ? "bg-gray-700 pr-[100px] text-white"
                  : ""
              }`}
              onClick={() => setActiveTab("Create")}
            >
              <IoMdAddCircleOutline /> Create
            </li>
            <li
              className={`p-2 rounded-tl-lg rounded-bl-lg flex items-center gap-2 cursor-pointer ${
                activeTab === "Settings"
                  ? "bg-gray-700 pr-[80px] text-white"
                  : ""
              }`}
              onClick={() => setActiveTab("Settings")}
            >
              <IoIosSettings /> Settings
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">{getTabContent()}</main>

      {/* Right Sidebar - Users List */}
      <aside className="w-64 bg-gray-900 p-4 text-white">
        <h2 className="font-bold text-lg">Users:</h2>
        {isLoading ? (
          <div className="mt-4 text-center text-gray-400">Loading users...</div>
        ) : (
          <ul className="mt-4 space-y-2">
            {users && users.length > 0 ? (
              users.map((userData) => (
                <li
                  key={userData.id}
                  className="p-2 bg-gray-800 rounded-lg flex items-center"
                >
                  <img
                    src={
                      userData.photoURL ||
                      "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png?v=2025030913"
                    }
                    alt={`${userData.displayName}'s Avatar`}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-2">{userData.displayName}</span>
                  {userData.isOnline && (
                    <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
                  )}
                </li>
              ))
            ) : (
              <li className="p-2 bg-gray-800 rounded-lg text-center text-gray-400">
                No users found
              </li>
            )}
          </ul>
        )}
      </aside>
    </div>
  );
}

export default Home;
