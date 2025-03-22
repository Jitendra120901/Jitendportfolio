"use client"

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../UI/3DCard";
import Link from "next/link";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const data = [
    {
      title: "Trackgee.com",
      projectName: "Trackgee",
      desc: "Trackgee: Vechile Tracking App",
      img: "/img/trackgee.jpeg",
      to: "",
      type: "mobile",
    },
    {
      title: "Parents Control",
      projectName: "Parents Control",
      desc: "Parents Control: Track your child",
      img: "/img/parentControl.jpg",
      to: "",
      type: "mobile",
    },
    {
      title: "JCwhatsapp",
      projectName: "JCwhatsapp",
      desc: "Whatsapp chat app",
      img: "/img/jcWhatsapp.jpeg",
      to: "",
      type: "mobile",
    },
    {
      title: "Travelory",
      projectName: "Travelory",
      desc: "Travelory: Travel events, views and discoveries",
      img: "/img/tev.png",
      to: "https://play.google.com/store/apps/details?id=com.css.TraveloryApp&hl=en_IN",
      type: "mobile",
    },
    {
      title: "Sharp-Quize.com",
      projectName: "Sharp-Quize",
      desc: "Sharp-Quize: Learning seamlessly",
      img: "https://play-lh.googleusercontent.com/XOzkc7Mj6MEWs62Jj-7-_wTsdWziRSzVTzl0pNGds5seoAhf9Y08n1WHaCfmEb8WBa8=w1052-h592-rw",
      to: "https://play.google.com/store/search?q=sharp%20quize&c=apps&hl=en_IN",
      type: "mobile",
    },
    {
      title: "Aicic.com",
      projectName: "Aicic",
      desc: "Aicic: Social Media App",
      img: "/img/aicic.jpg",
      to: "https://play.google.com/store/apps/details?id=com.aicicapp&hl=en_IN",
      type: "mobile",
    },
    {
      title: "Blind Spot",
      projectName: "Blind Spot",
      desc: "Blind Spot : Identify the Edges of Objec and give its Measurment",
      img: "/img/arObjectDetector.jpg",
      to: "",
      type: "mobile",
    },
    {
      title: "mycity.in",
      projectName: "My City",
      desc: "My City: Complete Services Solution",
      img: "/img/mycity.jpg",
      to: "",
      type: "mobile",
    },
    {
      title: "Internbaba.in",
      projectName: "Internbaba",
      desc: "Internbaba: Search Your Job",
      img: "/img/internbaba.jpg",
      to: "https://play.google.com/store/search?q=internbaba&c=apps&hl=en_IN",
      type: "mobile",
    },
    {
      title: "Theranize.app",
      projectName: "Patient App",
      desc: "Patient App : Track Your Medical Report",
      img: "/img/thera.jpg",
      to: "https://play.google.com/store/apps/details?id=com.beaming.theranizepatientapp&hl=en_IN",
      type: "mobile",
    },
    {
      title: "Construnction.app",
      projectName: "Construnction",
      desc: "Construnction : E-commerce App For Construnction material",
      img: "/img/construnction.jpeg",
      to: "https://admin.theranize.com/login",
      type: "mobile",
    },
    {
      title: "Smile Care Agency",
      projectName: "Smile Care Agency",
      desc: "Smile Care Agency : On This Platform We can Search a Job FOr Carer",
      img: "/img/smileCare.jpeg",
      to: "",
      type: "mobile",
    },
    {
      title: "AVJ",
      projectName: "AVJ",
      desc: "At AVJ Laboratories, we stand as a leading Pharmaceutical Company",
      img: "https://play-lh.googleusercontent.com/dPbSPovc7xAme_43TUhXV_rl-kx5h0iWFvu3HYJTpEymCBTQmXOoxMNtDm-zYwryrQ=w1052-h592-rw",
      to: "https://play.google.com/store/apps/details?id=com.avj&hl=en_IN",
      type: "mobile",
    },
    {
      title: "Housie Mania",
      projectName: "Housie Mania",
      desc: "Housie Mania: Modern Tambola Housie Number Generator & Offline Ticket Generator",
      img: "/img/housiaMania.jpeg",
      to: "https://play.google.com/store/apps/details?id=com.rshousiemania",
      type: "mobile",
    },
    {
      title: "Theranize.app",
      projectName: "Theranize",
      desc: "Theranize: Healthcare management platform",
      img: "/img/therenize.png",
      to: "https://admin.theranize.com/login",
      type: "pc",
    },
  ];

  // Display 6 projects initially, or all if showAll is true
  const visibleProjects = showAll ? data : data.slice(0, 6);

  return (
    <div className="text-white lg:mt-4 mt-6 px-3">
      <p className="lg:text-4xl text-2xl font-semibold text-center mb-6">Projects</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center mx-auto max-w-6xl">
        {visibleProjects.map((item, index) => (
          <CardContainer
            className="inter-var w-full max-w-xs perspective-1200"
            key={index}
          >
            <CardBody className="bg-gradient relative group/card dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-lg p-4 border transform-style-3d">
              <CardItem
                translateZ="40"
                className="text-base !pb-1 !m-0 font-bold text-slate-100 line-clamp-1"
              >
                {item.projectName}
              </CardItem>
              <CardItem as="p" translateZ="50" className="text-slate-500 text-xs line-clamp-2">
                {item.desc}
              </CardItem>
              <CardItem
                translateZ="60"
                className="w-full mt-2 overflow-hidden"
              >
                <div className="flex justify-center items-center py-1">
                  <div className="w-full h-[140px] rounded-lg overflow-hidden">
                    <img
                      src={item.img}
                      className="w-full h-full object-contain bg-black/20"
                      alt={`${item.projectName} thumbnail`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/img/placeholder-image.png"; // Fallback image
                      }}
                    />
                  </div>
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-2">
                {item.to && (
                  <CardItem
                    translateZ={15}
                    as={Link}
                    href={item.to}
                    target="_blank"
                    className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                )}
                <CardItem
                  translateZ={15}
                  className="px-3 py-1 rounded-lg text-xs font-normal ml-auto text-slate-400"
                >
                  {item.type === "mobile" ? "Mobile App" : "Web App"}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gradient relative group/card dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] px-6 py-2 bg-black/40  text-white border border-emerald-500/30 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
        >
          {showAll ? "Show Fewer Projects" : "View More Projects"} 
          <span className="ml-2">{showAll ? "↑" : "↓"}</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;