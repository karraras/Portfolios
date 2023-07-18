import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { HiMailOpen } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [wind, setWind] = useState("");
  const { open, color, setOpen, setActive, active } = useGlobalContext();
  const side = [
    { link: "/", name: "Home", icon: FaHome },
    { link: "/About", name: "About", icon: BsFillPersonFill },
    { link: "/Portfolio", name: "Portfolio", icon: AiFillFolderOpen },
    { link: "/Contact", name: "Contact", icon: HiMailOpen },
  ];

  useEffect(() => {
    const newWin = () => {
      return setWind(window.innerWidth);
    };
    window.addEventListener("resize", newWin);
    return () => {
      window.removeEventListener("resize", newWin);
    };
  }, [wind]);

  return (
    <aside
      className={`fixed z-40 h-screen ${
        wind > 678 && setOpen(false)
      } w-full duration-300 bg-gray-200 ${
        open ? "left-0" : "-left-full"
      } top-0 `}
    >
      <div className=" p-10 pt-20">
        <div>
          {side?.map((item, i) => {
            return (
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setActive(i);
                }}
                key={i}
                to={item?.link}
              >
                <div
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      active === i ? color : "black")
                  }
                  className={` flex cursor-pointer  gap-4 items-center  py-5  border-b-[1px] border-gray-300 border-solid `}
                >
                  <span>{React.createElement(item?.icon, { size: "25" })}</span>
                  <span className="text-3xl">{item?.name}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
