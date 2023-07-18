import { HiArrowRight } from "react-icons/hi";
import profile from "../assets/Profile.jpg";
import { useGlobalContext } from "./Context";

function Header() {
  const { color } = useGlobalContext();
  return (
    <header>
      <div
        style={{
          clipPath: "polygon(0 0, 30% 0, 70% 100%, 0% 100%)",
          backgroundColor: color,
        }}
        className="h-screen w-[400px] hidden lg:block left-0 top-0  fixed "
      ></div>
      <div className="navContainer lg:pr-44  py-28  lg:p-0 text-center lg:flex lg:items-center lg:h-screen">
        <div className="navWrapper gap-y-2 flex flex-col items-center lg:flex lg:flex-row lg:gap-20">
          <div className="image h-[300px]  z-30 relative w-[300px] lg:h-full lg:w-flex-1 lg:rounded-2xl overflow-hidden rounded-full">
            <img src={profile} alt="..." className="-mt-[25px]" />
          </div>
          <div className="detail cursor-pointer flex lg:items-start flex-col items-center  gap-4 lg:flex-1">
            <h1
              style={{ color: color }}
              className={` relative text-4xl lg:text-3xl font-semibold lg:pl-8`}
            >
              {` I'm Steve Milner.`}
              <span className="text-gray-600 dark:text-white block">
                Web Designer
              </span>
              <span
                style={{ backgroundColor: color }}
                className="w-[20px] absolute left-0 top-[18px] h-[2px] hidden lg:block"
              ></span>
            </h1>
            <p className="text-base lg:text-[12px] my-2 lg:text-left mb-4 text-gray-500 dark:text-white leading-5">{` I'm a Tunisian based web designer & front-end developer focused on crafting clean & user-friendly experiences. I am passionte about building excellent software that improves the lives of those around me.`}</p>

            <div
              style={{ borderColor: color }}
              className=" group flex items-center lg:pl-3   relative text-base pl-6 lg:w-[170px] text-white lg:h-[40px]  border  h-[50px]  w-[200px]  rounded-full"
            >
              <h1 className=" group-hover:text-white lg:text-sm dark:text-white text-gray-500 text-left z-10">
                More About Me
              </h1>
              <span
                style={{ backgroundColor: color }}
                className="p-1 z-10 lg:h-[40px] lg:w-[40px] rounded-full absolute -right-[1px] flex items-center justify-center h-[50px]  w-[50px] "
              >
                <HiArrowRight />
              </span>
              <span
                style={{ backgroundColor: color }}
                className="p-1 group-hover:w-[202px] lg:group-hover:w-[172px] duration-300 origin-right lg:w-[40px]  lg:h-[40px] w-[50px]  h-[50px] rounded-full absolute -right-[1px] flex items-center justify-center    "
              ></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
