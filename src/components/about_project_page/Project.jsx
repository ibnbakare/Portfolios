import Link from "next/link";
import React from "react";
import first from "./img/first.png"
import second from "./img/second.jpg";
import third from "./img/third.png";
import Project_card from "../project_card/Project_card";

const Project = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "ChertNodes",
      disc: "Minecraft servers hosting ",
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "Node.js"],
      title: "ProtectX",
      disc: "Discord anti-crash bot ",
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "Node.js", "python"],
      title: "Kahoot Answers Viewer",
      disc: "Get answers to your kahoot quiz ",
    },
  ];

  return (
    <>
      <div className="px-5 py-10   max-w-[1560px] h-min-screen bg-[#282C33] ">
        {/* top */}
        <div className="flex justify-between items-center mx-auto">
          {/* left */}
          <div className="text-white font-medium text-[32px] w-2/3 flex items-center  gap-2">
            <div className=" ">
              <span className="text-[#C778DD]">#</span>Project
            </div>
            <div className=" w-full h-px bg-[#C778DD] "></div>
          </div>
          {/* right */}
          <div className="text-white font-medium">
            <Link href="">
              <span>View all ~~&gt;</span>
            </Link>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
