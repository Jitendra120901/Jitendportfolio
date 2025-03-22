import React from "react";
import { CardBody, CardContainer, CardItem } from "../UI/3DCard";
import Image from "next/image";

const Skills = () => {
  const data1 = [
    {
      title: "FLUTTER",
      img: "/img/flutter.svg",
    },
    {
      title: "REACT NATIVE",
      img: "/img/react.svg",
    },
    {
      title: "NODE , EXPRESS",
      img: "/img/nodejs.svg",
    },

    {
      title: "JAVA SCRIPT",
      img: "/img/js.svg",
    },
  ];

  const data2 = [
    // {
    //   title: "TAILWIND CSS",
    //   img: "/img/tailwind.png",
    // },
  ];

  return (
    <div className="text-white lg:mt-2 mt-2 justify-center items-center">
      <p className="lg:text-5xl text-3xl font-semibold text-center">Skills</p>

      <div className="flex flex-wrap lg:flex-nowrap justify-between lg:gap-8 gap-4 items-center lg:mt-12 mt-4">
        {data1.map((item, index) => (
          <button
            className={`${
              false ? "lg:opacity-0 hidden lg:block" : "opacity-1"
            } relative inline-flex w-full overflow-hidden rounded-xl p-[1px] focus:outline-none hover:-translate-y-2 hover:cursor-pointer transition-all duration-300`}
            key={index + 10}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className="flex justify-between h-full w-full cursor-pointer items-center rounded-xl bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl"
              style={{ padding: "7px 24px 7px 13px" }}
            >
              <img src={item.img} alt="" className="w-[64px] h-[64px]" />
              <p>[ {item.title} ]</p>
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between lg:gap-8 gap-4 items-center lg:mt-8 mt-4">
        {data2.map((item, index) => (
          <button
            className={`${
              false ? "lg:opacity-0 hidden lg:block" : "opacity-1"
            } relative inline-flex w-full overflow-hidden rounded-xl p-[1px] focus:outline-none hover:-translate-y-2 hover:cursor-pointer transition-all duration-300`}
            key={index + 20}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className="flex justify-between h-full w-full cursor-pointer items-center rounded-xl bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl"
              style={{ padding: "7px 24px 7px 13px" }}
            >
              <img src={item.img} alt="" className="w-[64px] h-[64px]" />
              <p>[ {item.title} ]</p>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
