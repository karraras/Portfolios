import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { BsFillGearFill } from "react-icons/bs";
import { themes } from "../data";
import { useGlobalContext } from "./Context";
import { AiOutlineClose } from "react-icons/ai";

import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { HiMailOpen } from "react-icons/hi";
import React from "react";
import { NavLink } from "react-router-dom";

function Setting() {
  const { setColor, gear, setGear, open, setOpen, color, active, setActive } =
    useGlobalContext();
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ? true : false
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-sheme:dark)");
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  const side = [
    { link: "/", name: "Home", icon: FaHome },
    { link: "/About", name: "About", icon: BsFillPersonFill },
    { link: "/Portfolio", name: "Portfolio", icon: AiFillFolderOpen },
    { link: "/Contact", name: "Contact", icon: HiMailOpen },
  ];

  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case true:
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case false:
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [element.classList, theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div>
      <span
        onClick={() => setOpen(!open)}
        className={`dark:bg-slate-700 z-50 ${
          !open && "bg-gray-500"
        }    bg-gray-200 rounded text-white sm:block  lg:hidden p-2 cursor-pointer fixed top-4 right-4`}
      >
        {open ? (
          <AiOutlineClose size={25} className="text-gray-500" />
        ) : (
          <FaBars size={25} />
        )}
      </span>

      <div
        className={`fixed z-50 duration-300 gap-2  ${
          gear ? "-left-full" : "left-0 "
        } flex flex-col justify-center items-center  top-28 `}
      >
        <div
          onClick={() => setGear(!gear)}
          className="bg-white  shadow-md rounded p-2 flex justify-center items-center "
        >
          <button>
            <BsFillGearFill size={25} />
          </button>
        </div>
        <div className="bg-white  shadow-md rounded p-2 flex justify-center items-center ">
          <button onClick={() => setTheme(!theme)}>
            {theme === true ? (
              <CiDark size={25} />
            ) : (
              <MdOutlineLightMode size={25} />
            )}
          </button>
        </div>
      </div>

      <div
        className={` z-50 ${
          gear ? "left-0" : "-left-full"
        }  fixed  top-28  bg-white rounded p-2 z-index-50 duration-300 w-[200px] `}
      >
        <div className="  flex p-2 border-b-[1px] border-gray-600 text-base items-center justify-between">
          <p className="font-[500] text-gray-600">Style Switcher</p>
          <span
            onClick={() => setGear(!gear)}
            className="
          border-gray-600 cursor-pointer"
          >
            <GrClose />
          </span>
        </div>

        <div className="flex flex-wrap gap-[10px] p-[10px]  ">
          {themes.map((item) => {
            return (
              <img
                className="w-6  cursor-pointer"
                src={item.img}
                key={item.id}
                onClick={() => {
                  setColor(item.color);
                  setGear(!gear);
                }}
                alt="..."
              />
            );
          })}
        </div>
      </div>

      <div className=" flex-col lg:flex right-5 top-2/4 -translate-y-2/4  hidden  fixed w-[130px] gap-4">
        {side?.map((item, i) => {
          return (
            <NavLink
              onClick={() => {
                setOpen(false);
              }}
              key={i}
              to={item?.link}
              className={`flex justify-end`}
            >
              <div className="rounded-full flex justify-end w-[40px] hover:w-[130px] overflow-hidden duration-300">
                <div
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e5e7eb")(
                      (e.currentTarget.style.color =
                        active === i ? "white" : "black")
                    )
                  }
                  style={{ color: active === i ? "white" : "black" }}
                  className="flex items-center  duration-300 justify-between w-[130px] pl-4 rounded-full group"
                >
                  <span className="text-lg group-hover:text-white">
                    {item?.name}
                  </span>
                  <span
                    onClick={() => setActive(i)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        active === i ? color : "#e5e7eb")
                    }
                    style={{ background: active === i ? color : "#e5e7eb" }}
                    className="h-[40px]  w-[40px] flex items-center bg-gray-200 justify-center group-hover:text-white  rounded-full"
                  >
                    {React.createElement(item?.icon, { size: "15" })}
                  </span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Setting;
