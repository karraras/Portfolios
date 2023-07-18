import { createContext, useState, useEffect, useContext } from "react";
import { themes } from "../data";
const AppContext = createContext();
function AppProvider(prop) {
  const [color, setColor] = useState(
    localStorage.getItem("colors") || themes[0].color
  );
  const [gear, setGear] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    localStorage.setItem("colors", color);
  }, [color]);

  const values = {
    color,
    setColor,
    gear,
    setGear,
    open,
    setOpen,
    active,
    setActive,
  };
  return (
    <AppContext.Provider value={values}>{prop.children}</AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
