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
      type: "Mobile",
    },
    {
      title: "Parents Control",
      projectName: "Parents Control",
      desc: "Parents Control: Track your child",
      img: "/img/parentControl.jpg",
      to: "",
      type: "Mobile",
    },
    {
      title: "JCwhatsapp",
      projectName: "JCwhatsapp",
      desc: "Whatsapp chat app",
      img: "/img/jcWhatsapp.jpeg",
      to: "",
      type: "Mobile",
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
      img: "/img/sharpQuize.jpg",
      to: "https://play.google.com/store/search?q=sharp%20quize&c=apps&hl=en_IN",
      type: "Mobile",
    },
    {
      title: "Aicic.com",
      projectName: "Aicic",
      desc: "Aicic: Social Media App",
      img: "/img/aicic.jpg",
      to: "https://play.google.com/store/apps/details?id=com.aicicapp&hl=en_IN",
      type: "Mobile",
    },
    {
      title: "Blind Spot",
      projectName: "Blind Spot",
      desc: "Blind Spot : Identify the Edges of Objec and give its Measurment",
      img: "/img/arObjectDetector.jpg",
      to: "",
      type: "Mobile",
    },
    {
      title: "mycity.in",
      projectName: "My City",
      desc: "My City: Complete Services Solution",
      img: "/img/mycity.jpg",
      to: "",
      type: "Mobile",
    },
    {
      title: "Internbaba.in",
      projectName: "Internbaba",
      desc: "Internbaba: Search Your Job",
      img: "/img/internbaba.jpg",
      to: "https://play.google.com/store/search?q=internbaba&c=apps&hl=en_IN",
      type: "Mobile",
    },
    {
      title: "Theranize.app",
      projectName: "Patient App",
      desc: "Patient App : Track Your Medical Report",
      img: "/img/thera.jpg",
      to: "https://play.google.com/store/apps/details?id=com.beaming.theranizepatientapp&hl=en_IN",
      type: "Mobile",
    },
    {
      title: "Construnction.app",
      projectName: "Construnction",
      desc: "Construnction : E-commerce App For Construnction material",
      img: "/img/construnction.jpeg",
      to: "https://admin.theranize.com/login",
      type: "Mobile",
    },
    {
      title: "Smile Care Agency",
      projectName: "Smile Care Agency",
      desc: "Smile Care Agency : On This Platform We can Search a Job FOr Carer",
      img: "/img/smileCare.jpeg",
      to: "",
      type: "Mobile",
    },
    {
      title: "AVJ",
      projectName: "AVJ",
      desc: "At AVJ Laboratories, we stand as a leading Pharmaceutical Company",
      img: "https://play-lh.googleusercontent.com/dPbSPovc7xAme_43TUhXV_rl-kx5h0iWFvu3HYJTpEymCBTQmXOoxMNtDm-zYwryrQ=w1052-h592-rw",
      to: "https://play.google.com/store/apps/details?id=com.avj&hl=en_IN",
      type: "Mobile",
    },
    {
      title: "Housie Mania",
      projectName: "Housie Mania",
      desc: "Housie Mania: Modern Tambola Housie Number Generator & Offline Ticket Generator",
      img: "/img/housiaMania.jpeg",
      to: "https://play.google.com/store/apps/details?id=com.rshousiemania",
      type: "Mobile",
    },
    {
      title: "Theranize.app",
      projectName: "Theranize",
      desc: "Theranize: Healthcare management platform",
      img: "/img/therenize.png",
      to: "https://admin.theranize.com/login",
      type: "Pc",
    },
  ];

  // Display 6 projects initially, or all if showAll is true
  const visibleProjects = showAll ? data : data.slice(0, 6);

  return (
    <div className="text-white lg:mt-4 mt-6 px-3">
      <p className="lg:text-4xl text-2xl font-semibold text-center mb-6">Projects</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center mx-auto max-w-6xl">
        {visibleProjects.map((item, index) => (
           <CardContainer className="inter-var max-w-xs perspective-1200" key={index}>
           <CardBody className="bg-gradient relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[38rem] h-auto rounded-xl p-6 border">
             <CardItem
               translateZ="50"
               className="lg:text-xl text-lg max-w-xs !pb-2 !m-0 font-bold text-slate-100"
             >
               {item.projectName}
             </CardItem>
             <CardItem as="p" translateZ="60" className="text-slate-500">
               {item.desc}
             </CardItem>
             <CardItem
               translateZ="100"
               rotateX={20}
               rotateZ={-10}
               className="w-full mt-4"
             >
               <div className="flex justify-center items-center h-full w-full">
                 <img
                   src={item.img}
                   className="h-[220px] lg:h-[400px] object-cover rounded-xl group-hover/card:shadow-xl"
                   alt={`${item.projectName} thumbnail`}
                 />
               </div>
             </CardItem>
             <div className="flex justify-between items-center lg:mt-10">
               <CardItem
                 translateZ={20}
                 translateX={-40}
                 as={Link}
                 href={item.to}
                 target="_blank"
                 className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
               >
                 Try now →
               </CardItem>
               <CardItem
                 translateZ={20}
                 translateX={40}
                 as="button"
                 className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
               >
                {item.type}

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
