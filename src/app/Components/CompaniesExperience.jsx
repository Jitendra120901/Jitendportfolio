import React from "react";
import { CardBody, CardContainer, CardItem } from "../UI/3DCard";
import Link from "next/link";

const CompaniesExperience = () => {
  const experiences = [
    {
      company: "THERANIZE",
      role: "Software Engineer",
      duration: "10/12/2024 - Present",
      description: "Worked on app and web development",
      img: "/logo/theranize_logo.jpeg",
      to: "https://www.linkedin.com/company/theranize-health/posts/?feedView=all",
    },
    {
      company: "Concrete Software Solution Pvt. Ltd ( CSS )",
      role: "Software Engineer",
      duration: "01/07/2024 - 10/12/2024",
      description: "Worked on app and web development,",
      img: "/logo/css_logo.png",
      to: "https://www.cssinfotech.in/",
    },
    {
      company: "BlueHeart Technologies Pvt. Ltd.",
      role: "Software Engineer",
      duration: "15/02/2022 - 30/04/2024",
      description: "Worked on app and web development",
      img: "/logo/bluehearttech_logo.jpeg",
      to: "https://www.linkedin.com/company/bluehearttech/?originalSubdomain=in",
    },
  ];

  return (
    <div className="text-white lg:mt-4 mt-6 px-3">
      <p className="lg:text-4xl text-2xl font-semibold text-center mb-6">
        Experience
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center mx-auto max-w-6xl">
        {experiences.map((item, index) => (
          <CardContainer
            className="inter-var w-full max-w-xs perspective-1200"
            key={index}
          >
            <CardBody className="bg-gradient relative group/card dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-lg p-4 border transform-style-3d">
              <CardItem
                translateZ="40"
                className="text-base !pb-1 !m-0 font-bold text-slate-100 line-clamp-1"
              >
                {item.company}
              </CardItem>
              <CardItem
                as="p"
                translateZ="50"
                className="text-slate-500 text-sm"
              >
                {item.role} ({item.duration})
              </CardItem>
              <CardItem
                as="p"
                translateZ="50"
                className="text-slate-400 text-xs"
              >
                {item.description}
              </CardItem>
              <CardItem
                translateZ="80"
                rotateX={10}
                rotateZ={-3}
                className="w-full mt-2 overflow-hidden"
              >
                <div className="flex justify-center items-center py-1">
                  <img
                    src={item.img}
                    className="h-[70px] w-[180px] object-contain rounded-lg group-hover/card:shadow-lg"
                    alt={`${item.company} thumbnail`}
                  />
                </div>
              </CardItem>
              <div className="flex items-center mt-2">
                <CardItem
                  translateZ={15}
                  as={Link}
                  href={item.to}
                  target="_blank"
                  className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                >
                  View Company →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default CompaniesExperience;
