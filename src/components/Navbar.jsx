import React, { useState } from "react";
import Logo from "../assets/ArithmoLogo.png";
import Hamburger from "../assets/hamburgerMenuIcon.png";
import CloseIcon from "../assets/closeMenuIcon.png";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import useGoogleAnalyticsTracker from "../utils/customHooks/googleAnalytics";

const Navbar = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(true);

  const navigate = useNavigate();

  const googleAnalyticsTracker = useGoogleAnalyticsTracker("NavBar");

  const handleMenuIcon = () => {
    setShowMenuIcon((prevState) => !prevState);
  };

  const onClickHandler = (e) => {
    googleAnalyticsTracker("Sign up", "Navbar sign up button");
    navigate("sign-up");
  };

  return (
    <nav className="max-w-6xl m-auto px-4 py-[6px]">
      <div className="">
        {/* Mobile View */}
        <div id="mobile-menu">
          <div className="flex justify-between items-center">
            {/* Mobile Logo Begins */}
            <div className="md:hidden">
              <Link to="/">
                <p className="text-[24px] text-[#0029FF] font-extrabold">
                  arithmo.ai
                </p>
              </Link>
            </div>
            {/* Mobile Logo Ends */}

            {/* Hamburger Begins */}
            {showMenuIcon && (
              <div onClick={handleMenuIcon} className="p-4 md:hidden">
                <img
                  src={Hamburger}
                  alt="Hamburger Icon"
                  width={45}
                  height={45}
                />
              </div>
            )}
            {/* Hamburger Ends */}

            {/* Close Begins */}
            {!showMenuIcon && (
              <div onClick={handleMenuIcon} className="p-4 md:hidden">
                <img src={CloseIcon} alt="Close Icon" width={45} height={45} />
              </div>
            )}
            {/* Close Ends */}
          </div>

          {/* Mobile Menu Begins */}
          {!showMenuIcon && (
            <div className="min-h-screen md:hidden">
              <ul className="mt-8 flex flex-col justify-center items-center font-semibold text-[#111]">
                <li className="text-[#111] text-2xl p-[32px]">
                  <a href="/#howitworks">How it works</a>
                </li>
                <li className="text-[#111] text-2xl p-[32px]">
                  <a href="/#features">Features</a>
                </li>
                <li className="text-[#111] text-2xl p-[32px]">
                  <a href="/#contact">Contacts</a>
                </li>
                <li className="flex flex-col items-center">
                  <div className="m-4">
                  <button type="button" className="text-2xl">
                  <a href="https://app.arithmo.ai/sign-in">Log in</a>
                </button>
                  </div>
                  <div className="m-4">
                  <a href="https://app.arithmo.ai/sign-up">
                  <Button text="Sign up free" />{/*onClick={onClickHandler}*/}
                  </a>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {/* Mobile Menu Ends */}
        </div>
        {/* Mobile View Ends */}

        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {/* Desktop logo Begins */}
              <div>
                {/* <img
                src={Logo}
                alt="Desktop arithmo logo"
                width={140}
                height={50}
              />
               */}
                {/* Desktop Logo begins */}
                <Link to="/">
                  <p className="text-[24px] text-[#0029FF] font-extrabold">
                    arithmo.ai
                  </p>
                </Link>
                {/* Desktop Logo ends */}
              </div>
              {/* Desktop logo Ends */}

              {/* Desktop Menu Item Begins */}
              <div className="hidden md:block">
                <ul className="flex items-center text-[14px] font-semibold text-[#111] mt-1">
                  <li className="ml-[40px]">
                    <a href="/#howitworks">How it works</a>
                  </li>
                  <li className="ml-[40px]">
                    <a href="/#features">Features</a>
                  </li>
                  <li className="ml-[40px]">
                    <a href="/#contact">Contact</a>
                  </li>
                </ul>
              </div>
              {/* Desktop Menu Item Ends */}
            </div>
          </div>

          {/* Sign in, Sign up Button Begins */}
          <div className="hidden md:block">
            <ul className="flex items-center">
              <li className="font-semibold">
                <button type="button" className="text-[14px]">
                  <a href="https://app.arithmo.ai/sign-in">Log in</a>
                </button>
              </li>
              <li className="ml-[24px]">
                <a href="https://app.arithmo.ai/sign-up">
                <Button  text="Sign up free" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Sign in, Sign up Button Ends onClick={onClickHandler}*/}
      </div>
    </nav>
  );
};

export default Navbar;
