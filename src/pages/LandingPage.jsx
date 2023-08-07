import React, { useEffect } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import GetReady from "../components/GetReady";
import Hero from "../components/Hero";
import Info from "../components/Info";
import NewArithmoWorks from "../components/NewArithmoWorks";
import Stats from "../components/Stats";
import Structure from "../components/Structure";
import TextLoop from "../components/TextLoop";
import UseCases from "../components/UseCases";
import requestHandler from "../utils/request/requestHandler";

const LandingPage = () => {
  useEffect(() => {
    requestHandler({
      url: "https://api.getwaitlist.com/api/v1/waiter",
      requestOptions: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
      data: { email: "example@example.com", api_key: "ZJFT0J" },
    });
  }, []);

  return (
    <section>
      <main className="min-h-[80vh] pt-16 md:pt-32">
        <Hero />
        <TextLoop />
        <Stats />
      </main>
      <div className="min-h-[80vh]">
        <Info />
        <Structure />
      </div>
      <UseCases />
      {/* <ArithmoWorks /> */}
      {/* <ArithmoRebuild /> */}
      <NewArithmoWorks />
      <GetReady />
      <Features />
      <div id="contact" className="max-w-5xl mx-auto">
        <GetInTouch />
      </div>
    </section>
  );
};

export default LandingPage;
