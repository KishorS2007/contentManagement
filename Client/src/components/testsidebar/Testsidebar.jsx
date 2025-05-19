import React, { useState } from "react";
import {
  FaHome,
  FaUserFriends,
  FaCog,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
  FaFolder,
  FaFileAlt,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";
import ModeIcon from '@mui/icons-material/Mode';
import { IconButton } from "@mui/material";
const TestSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  const [openMenus, setOpenMenus] = useState({});
  const [openSets, setOpenSets] = useState({});

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const toggleSet = (setKey) => {
    setOpenSets((prev) => ({ ...prev, [setKey]: !prev[setKey] }));
  };

  const menuItems = [
    {
      name: "classwork",
      label: "Classwork",
      icon: <FaHome />,
      sets: [
        {
          name: "set-1",
          subsets: ["Algebra-I","Algebra-II"],
        },
        {
          name: "set-2",
          subsets: ["Linear Equations", "Quadratic Equations"],
        },
        {
          name: "set-3",
          subsets: ["Polynomials", "Factoring"],
        },
      ],
    },
    {
      name: "homework",
      label: "Homework",
      icon: <FaUserFriends />,
      sets: [
        {
          name: "set-1",
          subsets: ["Algebra-I","Algebra-II"],
        },
        {
          name: "set-2",
          subsets: ["Linear Equations", "Quadratic Equations"],
        },
        {
          name: "set-3",
          subsets: ["Polynomials", "Factoring"],
        },
      ],
    },
    {
      name: "assessment",
      label: "Assessment",
      icon: <FaCog />,
      sets: [
        {
          name: "set-1",
          subsets: ["Algebra-I","Algebra-II"],
        },
        {
          name: "set-2",
          subsets: ["Linear Equations", "Quadratic Equations"],
        },
        {
          name: "set-3",
          subsets: ["Polynomials", "Factoring"],
        },
      ],
    },
  ];

  return (
    <div className="flex h-[100%]">
      <div
        className={`bg-white border-r shadow-md transition-all duration-300 p-4 pt-6 overflow-y-auto ${
          isOpen ? "w-[24vw]" : "w-20"
        }`}
        style={{width:"40vw !important"}}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`mb-6 text-gray-500 hover:text-black focus:outline-none w-full flex ${
            isOpen ? "justify-end pr-3" : "justify-center"
          }`}
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((section) => (
            <div key={section.name}>
              <button
                onClick={() => toggleMenu(section.name)}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-blue-100 focus:outline-none transition-colors duration-200 ${
                  activeItem === section.name ? "bg-blue-100 text-blue-600" : ""
                } ${!isOpen ? "justify-center px-0" : ""}`}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {section.icon}
                </span>
                {isOpen && (
                  <>
                    <span className="flex-1 text-left ">{section.label}</span>
                    <span>
                      {openMenus[section.name] ? (
                        <FaChevronDown size={12} />
                      ) : (
                        <FaChevronRight size={12} />
                      )}
                    </span>
                  </>
                )}
              </button>

              {/* Sets */}
              {isOpen && openMenus[section.name] && section.sets.map((set, idx) => {
                const key = `${section.name}-${set.name}`;
                return (
                  <div key={key} className="ml-6 mt-1">
                    <button
                      onClick={() => toggleSet(key)}
                      className="flex items-center gap-2 w-full px-2 py-1 text-sm hover:bg-blue-50 rounded-md"
                    >
                      <FaFolder size={14} />
                      <span className="flex-1 text-left">{set.name}</span>
                      {openSets[key] ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
                    </button>

                    {/* Subsets */}
                    {isOpen && openSets[key] && (
                      <div className="ml-6 flex flex-col gap-1 mt-1">
                        {set.subsets.map((sub, subIdx) => (
                            // <div>
                          <button
                            key={sub}
                            onClick={() => setActiveItem(`${key}-${sub}`)}
                            className={`flex justify-between items-center gap-2 px-2  text-sm rounded-md hover:bg-blue-50 ${
                                activeItem === `${key}-${sub}` ? "bg-blue-100 text-blue-600" : ""
                            }`}
                            >
                                <div className="flex">
                            <FaFileAlt size={12} className="mr-2"/>
                            <span className="text-[13px]">{sub}</span>
                                </div>
                            <IconButton ><ModeIcon sx={{scale:0.5,float:"right",color:"black"}}/></IconButton>
                          </button>
                            //   {/* </div> */} 
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-50">
        {/* <h1 className="text-2xl font-bold capitalize">
          {activeItem || "Select a menu item"}
        </h1>
        <p className="mt-2 text-gray-700">Main content goes here...</p> */}
        <Outlet />
      </div>
    </div>
  );
};

export default TestSidebar;