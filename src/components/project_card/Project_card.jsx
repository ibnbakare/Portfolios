import React from "react";

const Project_card = ({ img, langs, title }) => {
  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
        {/* img */}
        <div className="">
          <img className=" w-full" src={img} alt="" />
        </div>
        {/* Skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e) => {
            return <span className=" text-[#ABB2BF]">{e}</span>;
          })}
        </div>
        {/* disc */}
      </div>
    </>
  );
};

export default Project_card;
