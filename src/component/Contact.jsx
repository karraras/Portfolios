import { useGlobalContext } from "./Context";
import { RiMailOpenFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import React from "react";
import { FiSend } from "react-icons/fi";

function Contact() {
  const { color } = useGlobalContext();

  const social = [
    { link: "facebook", icon: FaFacebookF },
    { link: "linkedin", icon: FaLinkedinIn },
    { link: "twitter", icon: FaTwitter },
    { link: "youtube", icon: FaYoutube },
  ];
  return (
    <section>
      <div className="container ">
        <div className="wrap-container flex flex-col lg:px-40">
          <div>
            <h1 className="dark:text-white text-4xl font-bold text-center  py-14">
              Get In <span style={{ color: color }}>Touch</span>
            </h1>
          </div>
          <div className="lg:flex lg:flex-row lg:gap-5">
            <div className="flex flex-col gap-4 lg:flex-1 ">
              <h1 className="dark:text-white text-2xl lg:text-xl">
                {`Don't be Shy ! `}{" "}
              </h1>
              <p className="dark:text-gray-500 lg:text-sm text-xl">
                Feel free to get in touch with me.I am always open to discussing
                new projects,creative ideas or opportunities to be part of your
                visions.
              </p>
              <div className="flex  items-center   gap-4">
                <span style={{ color: color }}>
                  <RiMailOpenFill className="lg:text-sm text-4xl" />
                </span>
                <div>
                  <p className="dark:text-gray-500 lg:text-sm text-xl">
                    Mail me
                  </p>
                  <p className="dark:text-white text-gray-500  lg:text-sm text-xl">
                    Steve@mail.com
                  </p>
                </div>
              </div>
              <div className="flex  items-center gap-4">
                <span style={{ color: color }}>
                  <MdCall className="lg:text-sm text-4xl" />
                </span>
                <div>
                  <p className="text-gray-500 lg:text-sm  text-xl">Call me</p>
                  <p className="dark:text-white  text-gray-500 lg:text-sm text-xl">{`+216 21 184 010`}</p>
                </div>
              </div>
              <div className="flex gap-4">
                {social?.map((item, i) => {
                  return (
                    <Link key={i} to={item?.link}>
                      <p className="h-12 w-12 lg:h-8 lg:w-8 text-gray-800 bg-gray-200 rounded-full text-2xl lg:text-sm flex items-center justify-center">
                        {React.createElement(item.icon)}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="py-10 lg:flex-2">
              <form className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-4  lg:flex-row ">
                  <input
                    className="text-xl lg:placeholder:text-sm  p-2 bg-gray-200 placeholder:text-gray-800 w-full rounded-full pl-5"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="text-xl lg:placeholder:text-sm  p-2 bg-gray-200 placeholder:text-gray-800 w-full rounded-full pl-5"
                    type="email"
                    placeholder="Your Email"
                  />
                  <input
                    className="text-xl  lg:placeholder:text-sm p-2 bg-gray-200 placeholder:text-gray-800 w-full rounded-full pl-5"
                    type="text"
                    placeholder="Your Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="text-xl lg:placeholder:text-sm  h-28  resize-none p-2 bg-gray-200 pt-5  placeholder:text-gray-800 w-full rounded-3xl pl-5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div
                  style={{ borderColor: color }}
                  className=" group flex mb-3 items-center lg:h-[40px]  lg:w-[170px]   relative text-base pl-6  text-white  border  h-[50px] w-[200px]  rounded-full"
                >
                  <h1 className=" lg:text-sm group-hover:text-white  dark:text-white text-gray-500 text-left z-10">
                    sent Message
                  </h1>
                  <span
                    style={{ backgroundColor: color }}
                    className="p-1 z-10  lg:h-[40px] lg:text-sm  lg:w-[40px] rounded-full absolute -right-[1px] flex items-center justify-center h-[50px]  w-[50px] "
                  >
                    <FiSend />
                  </span>
                  <span
                    style={{ backgroundColor: color }}
                    className="p-1 group-hover:w-[202px]  lg:group-hover:w-[172px] duration-200 origin-right w-[50px]  lg:w-[40px] lg:h-[40px] h-[50px] rounded-full absolute -right-[1px] flex items-center justify-center    "
                  ></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
