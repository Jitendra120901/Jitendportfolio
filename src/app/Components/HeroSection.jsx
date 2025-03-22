import React from "react";
import { TextGenerateEffect } from "../UI/TextGenerateEffect";
import { BackgroundBeams } from "../UI/BackgroundBeams";

const HeroSection = () => {
  return (
    <div className="lg:h-[95vh] flex flex-col lg:gap-24 gap-8">
      <div className="flex gap-4">
        <img
          src="/logo/profile.jpg"
          alt="Profile"
          className="lg:w-[200px] lg:h-[200px] w-[110px] h-[110px] rounded-full object-cover"
        />

        <div>
          <TextGenerateEffect
            words={"Jitendra Choudhary"}
            className={
              "mt-2 name lg:text-3xl lg:px-2 font-semibold inline-block"
            }
          />
          <TextGenerateEffect
            words={"Flutter, React Native  & React Developer"}
            className={"name lg:text-3xl lg:px-2"}
          />
        </div>
      </div>

      <div>
        <div className="flex lg:flex-row flex-col lg:gap-6 gap-2">
          <div className="lg:grid flex grid-rows-2 lg:gap-6 gap-2">
            <div className="flex flex-grow justify-center items-center lg:p-8 p-4 text-white flex-col border-purple-custom rounded-2xl">
              <p className="lg:text-6xl text-5xl font-semibold">
                15<span style={{ color: "#c97bff" }}>+</span>
              </p>
              <p className="whitespace-nowrap">completed projects</p>
            </div>
            <div className="flex flex-grow justify-center items-center lg:p-8 p-4 text-white flex-col border-purple-custom rounded-2xl">
              <p className="lg:text-6xl text-5xl font-semibold">
                3<span style={{ color: "#c97bff" }}>+</span>
              </p>
              <p className="whitespace-nowrap">Years Experience</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-white border-purple-custom lg:p-10 p-4 rounded-2xl">
            <p className="lg:text-3xl text-2xl font-semibold">
              We can make it <br />
              Together
            </p>
            <p className="text-md text-justify	">
              I am a Flutter, React Native, and React.js Developer with 3+ years
              of experience in building high-performance, scalable applications.
              My expertise lies in crafting cross-platform mobile apps and
              modern web interfaces, ensuring seamless user experiences.
              Passionate about UI/UX design, API integrations, and state
              management, I strive to deliver innovative and efficient software
              solutions.
            </p>
            <a
              href="/pdf/latestResume.pdf"
              download="/pdf/latestResume.pdf"
              className="rounded-lg text-white visit-btn text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
