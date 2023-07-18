import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { portfolio } from "../data";
import { useGlobalContext } from "./Context";

function Portfolio() {
  const { color } = useGlobalContext();

  const [count, setCount] = useState("");
  return (
    <section>
      <div
        className={`container ${count !== "" && " h-screen overflow-hidden"}`}
      >
        <div className="wrap-container py-10 lg:px-44">
          <div className="pb-10">
            <h1 className="text-center text-4xl font-bold text-black dark:text-white">
              My <span style={{ color: color }}>Portfolio</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 ">
            {portfolio.map((item, ind) => {
              return (
                <div
                  onClick={() => setCount(ind)}
                  style={{ backgroundImage: `url(${item.img})` }}
                  key={item.id}
                  className="bg-center group bg-no-repeat cursor-pointer overflow-hidden bg-cover w-full h-[280px] lg:h-[150px] rounded-lg"
                >
                  <span
                    style={{ backgroundColor: color }}
                    className="hidden lg:flex group-hover:opacity-100  duration-300 items-center text-white opacity-0  justify-center  h-full w-full "
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}

            {portfolio.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className={` ${
                    count === ind ? "flex" : "hidden"
                  }  items-center   w-full justify-center p-4 bg-[#000000c2] fixed h-screen top-0 left-0 `}
                >
                  <div className="w-full dark:bg-gray-800 bg-white relative h-[500px] rounded p-4 lg:fixed  lg:w-1/2  lg:h-[70%] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <span
                      onClick={() => setCount("")}
                      className="text-white absolute  cursor-pointer -top-12 lg:-top-5  z-50 lg:-right-12 right-0 "
                    >
                      <AiOutlineCloseCircle size={45} className="lg:text-sm" />
                    </span>
                    <div className="">
                      <h1
                        style={{ color: color }}
                        className="text-3xl text-center lg:text-xl font-bold"
                      >
                        {item.title}
                      </h1>
                    </div>
                    <div className="py-4 lg:grid lg:grid-cols-2 ">
                      {item.details.map((im, i) => {
                        return (
                          <div
                            key={i}
                            className="flex   gap-2 items-center text-lg lg:text-sm "
                          >
                            <span className="dark:text-slate-500 text-gray-500">
                              {im.icon}
                            </span>
                            <div>
                              <span className="dark:text-white text-gray-500">
                                {im.title}
                              </span>
                              <span className="dark:text-white text-gray-600">
                                {im.desc}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      style={{ backgroundImage: `url(${item.img})` }}
                      className="bg-center bg-no-repeat bg-cover w-full h-[280px] lg:h-[200px] rounded-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
