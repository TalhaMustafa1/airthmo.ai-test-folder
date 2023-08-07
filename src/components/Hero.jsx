import React from "react";
import Button from "./Button";
import HeroVideo from "../assets/HeroVideo/video.mp4";
import { Link, useNavigate } from "react-router-dom";
import useGoogleAnalyticsTracker from "../utils/customHooks/googleAnalytics";

const Hero = () => {

  const navigate = useNavigate();

  const googleAnalyticsTracker = useGoogleAnalyticsTracker("Hero");

  const onClickHandler = (e) => {
    googleAnalyticsTracker("Sign up", "hero start free sign up");
    navigate("sign-up");
  };

  return (
    <section id="home" className="max-w-6xl m-auto px-4 py-2">
      <div className="flex flex-col justify-center items-center flex-wrap md:flex-row md:justify-between">
        <div className="text-left md:text-left">
          <h1 className="mb-[16px] font-bold text-[#0029FF] text-[30px] md:max-w-[400px] leading-[40px] md:text-[40px]">
            Automate Manual Data Entry
          </h1>
          <h2 className="mb-[8px] font-bold text-[#111] text-[18px] max-w-[800px]">
            with the help of Artificial Intelligence
          </h2>
          <p className="font-medium text-left text-[#111] text-[16px] md:max-w-[400px] md:text-left">
            {/*Extract data from any document type scanned or unscanned. */}
            Extract Tables, Addresses, Dates, Names, etc. from Documents. 
          </p>
          <div className="flex flex-col justify-center items-center my-[32px] md:flex-row md:justify-start">
          <a href="https://app.arithmo.ai/sign-up">
            <Button  text="Start free" />{/*onClick={onClickHandler}*/}
            </a>
            <span className="p-2 text-[12px] md:ml-[8px]">
              No Credit Card or Setup required
            </span>
          </div>
        </div>
        <div className="">
          <video
            autoPlay
            muted
            loop
            id="video"
            width={600}
            height={600}
            playsInline
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
