import parse from "html-react-parser";
import { personalInfo, skills, stats, resume } from "../data";
import { useGlobalContext } from "./Context";
import { FaDownload } from "react-icons/fa";
function About() {
  let radius = 60;
  let widthCir = 150;
  const { color } = useGlobalContext();
  return (
    <section>
      <div className="container py-14">
        <div className="wrapper-container lg:px-44">
          <div className="header">
            <h1 className="font-bold mb-10 text-gray-600 text-center text-4xl">
              About <span style={{ color: color }}>Me</span>
            </h1>
          </div>

          <div className=" flex flex-col lg:flex-row gap-10 ">
            <div>
              <h2 className="text-gray-500 font-[500] text-2xl ">
                Peronal Infos
              </h2>
              <ul className="my-6 grid grid-cols-2 lg:text-sm">
                {personalInfo.map((item) => {
                  return (
                    <li className="text-gray-400 my-2" key={item.id}>
                      {item.title}{" "}
                      <span className="font-[500] text-gray-500">
                        {item.description}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a href={resume} download="Donwload Cv">
                <div
                  style={{ borderColor: color }}
                  className=" group flex mb-3 items-center lg:h-[40px]   relative text-base pl-6  text-white  border  h-[50px] w-[200px] lg:w-[170px] rounded-full"
                >
                  <h1 className=" group-hover:text-white lg:text-sm  dark:text-white text-gray-500 text-left z-10">
                    Download Cv
                  </h1>
                  <span
                    style={{ backgroundColor: color }}
                    className="p-1 z-10 lg:h-[40px] lg:w-[40px] rounded-full absolute -right-[1px] lg:text-sm flex items-center justify-center h-[50px]  w-[50px] "
                  >
                    <FaDownload />
                  </span>
                  <span
                    style={{ backgroundColor: color }}
                    className="p-1 group-hover:w-[202px] lg:w-[40px]  lg:h-[40px] lg:group-hover:w-[172px] duration-300 origin-right w-[50px]  h-[50px] rounded-full absolute -right-[1px] flex items-center justify-center    "
                  ></span>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 ">
              {stats.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="shadow p-4  lg:h-[100px] lg:p-2 rounded"
                  >
                    <h1
                      className="text-3xl font-bold mb-4 lg:mb-2 lg:text-2xl"
                      style={{ color: color }}
                    >
                      {item.no}
                    </h1>
                    <div className="flex gap-3 lg:text-sm">
                      <p className=" w-6 h-6 lg:h-4 inline-block pt-3 ">
                        <span className="w-full h-[1px]  bg-gray-500 block"></span>
                      </p>
                      <span className="text-gray-500">{parse(item.title)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="py-20">
            <div className="header flex-col items-center flex justify-center">
              <hr className="w-[250px] border-t-2 border-gray-300 border-solid " />

              <h1 className="  py-10 font-bold mb-4 dark:text-white text-gray-500 text-center text-2xl">
                My Skills
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {skills.map((item) => {
                return (
                  <div
                    className="flex flex-col  items-center justify-center"
                    key={item.id}
                  >
                    <div className="relative">
                      <svg
                        width={widthCir}
                        height={widthCir}
                        viewBox={`0 0 ${widthCir}  ${widthCir}`}
                      >
                        <circle
                          className="stroke-gray-300 fill-none"
                          cx={`${widthCir / 2} `}
                          cy={`${widthCir / 2}`}
                          strokeWidth="10px"
                          r={`${radius}`}
                        />
                        <circle
                          className="fill-none"
                          cx={`${widthCir / 2} `}
                          cy={`${widthCir / 2}`}
                          strokeWidth="10px"
                          r={`${radius}`}
                          style={{
                            stroke: color,
                            strokeDasharray: radius * Math.PI * 2,
                            strokeDashoffset:
                              radius * Math.PI * 2 -
                              (radius * Math.PI * 2 * item.percentage) / 100,
                          }}
                          transform={`rotate(-90  ${widthCir / 2} ${
                            widthCir / 2
                          })`}
                        />
                      </svg>
                      <p className="dark:text-white text-gray-500 absolute text-3xl left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                        {item.percentage}%
                      </p>
                    </div>
                    <p className="dark:text-white  text-gray-500">
                      {" "}
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="header flex-col items-center flex justify-center">
              <hr className="w-[250px] border-t-2 border-gray-300 border-solid " />

              <h1 className="  py-10 font-bold mb-4 dark:text-white text-gray-500 text-center text-2xl">
                Experience &amp; Education
              </h1>
            </div>

            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
              {resume.map((item) => {
                return (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative ">
                      <div
                        style={{ backgroundColor: color }}
                        className="flex rounded-full p-2 text-2xl lg:text-xl text-white items-center z-20 sticky justify-center"
                      >
                        {item.icon}
                      </div>
                      <p className="absolute h-full w-[1px] bg-gray-400 left-[50%] z-10  top-0 translate-x-1/2 "></p>
                    </div>
                    <div>
                      <p className="bg-gray-200 dark:bg-gray-600 lg:text-sm dark:text-gray-400 rounded-full w-fit py-1 px-4">
                        {item.year}
                      </p>
                      <p className="my-4 lg:text-sm space font-[600] dark:text-white  text-gray-500">
                        {parse(item.title)}
                      </p>
                      <p className="text-gray-400 lg:text-sm"> {item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
