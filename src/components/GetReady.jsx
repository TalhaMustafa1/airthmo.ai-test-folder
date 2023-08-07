import React from 'react';
import Button from './Button';
import { Link, useNavigate } from "react-router-dom";
import useGoogleAnalyticsTracker from "../utils/customHooks/googleAnalytics";

const GetReady = () => {

  const navigate = useNavigate();

  const googleAnalyticsTracker = useGoogleAnalyticsTracker("GetReady");

  const onClickHandler = (e) => {
    googleAnalyticsTracker("Sign up", "get ready sign up button");
    navigate("sign-up");
  };

  return (
    <section className="bg-[#F1F3FA]">
      <div className="p-8 flex justify-center items-center flex-wrap">
        <h2 className="m-[8px] font-bold text-center text-[#111] text-[18px] md:mr-8">
          Ready to get started?
        </h2>
        <a href="https://app.arithmo.ai/sign-up">
        <Button text="Start free" />{/*onClick={onClickHandler} after Button*/}
        </a>
        <div className="m-2 md:ml-[8px]">
          <span className="text-[12px]">
            No Credit Card or Setup required
          </span>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
