import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Setting from "./component/Setting";
import Sidebar from "./component/Sidebar";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";
import { useGlobalContext } from "./component/Context";
function App() {
  const { open } = useGlobalContext();
  return (
    <main
      className={`bg-white dark:bg-black px-3  sm:px-6 font-OpenSans select-none ${
        open && "h-screen overflow-hidden"
      }`}
    >
      <Setting />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </main>
  );
}

export default App;
