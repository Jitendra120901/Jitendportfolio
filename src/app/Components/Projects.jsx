import React from "react";
import { PinContainer } from "../UI/3DPin";
import { CardBody, CardContainer, CardItem } from "../UI/3DCard";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const data = [
    {
      title: "Trackgee.com",
      projectName: "Trackgee",
      desc: "Trackgee: Vechile Tracking App",
      img: "/img/trackgee.jpeg",
      to: "https://play.google.com/store/apps/details?id=com.aicicapp&hl=en_IN",
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
      to: "https://admin.theranize.com/login",
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

  return (
    <div className="text-white lg:mt-4 mt-8">
      <p className="lg:text-5xl text-3xl font-semibold text-center">Projects</p>

      <div className="grid lg:grid-cols-2 grid-flow-row mt-8">
        {data.map((item, index) => (
          <CardContainer className="inter-var" key={index}>
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
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
