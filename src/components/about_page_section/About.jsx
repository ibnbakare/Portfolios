import React from "react";
import img1 from "./imgs/mans.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px]  border min-h-screen md:flex items-center justify-between flex-wrap pt-20 py-10  bg-[#282C33]">
        <div className="w-full container border mx-auto flex-1   border-red-300">
          <div className="w-10/12 sm:w-8/12 border-1 py-2 mx-auto ">
            <h1 className="font-semibold text-[32px] text-white mb-3">
              Ridhwan is a <span className="text-[#c778dd]">Web Developer</span>
              and <span className="text-[#C778DD]">front-end developer</span>
            </h1>
            <p className="text-[#ABB2BF] my-6">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
              Contact me!!
            </button>
          </div>
        </div>

        <div className=" border-2 border-green-400 flex-1">
          <div className="">
            <Image src={img1} width={457} height={386} className="contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
