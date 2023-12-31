import Image from "next/image";
import React from "react";

const Project_card = ({ img, langs,disc, title }) => {
  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
        {/* img */}
        <div className="">
        {/* <Image src={img} alt="" width={"15rem"} height={"7.6rem"} /> */}
        <Image src={img} width={457} height={386} className="contain" />
          {/* <Image className=" w-full" src={img} alt="" /> */}
        </div>
        {/* Skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e) => {
            return <span className=" text-[#ABB2BF]">{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{disc}</p>
        </div>
        {/* btns */}
        <div className="">
          <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
            Live {"<"}~{">"}
          </button>
        </div>
     </div>
    </>
  );
};

export default Project_card;
