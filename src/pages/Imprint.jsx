import React from 'react';
import AboutUsImage from '../assets/AboutUsImage.jpg';
const Imprint = () => {
  return (
    <section className="max-w-6xl m-auto px-4 py-2 my-16 min-h-[37vh]">
      <h2 className="mb-16 mt-8 text-[30px] text-center text-[#0029FF] font-bold md:text-[40px]">
        Imprint
      </h2>
      <div className="flex items-start justify-between">
        <ul className="text-[#111] text-[16px] font-medium">
          <li>arithmo.ai</li>
          <li>Lange Hauptstraße 9/22</li>
          <li>Hamburg</li>
          <li>Germany</li>
        </ul>
        <div>
          <img src={AboutUsImage} alt="About Us" width={400} />
        </div>
      </div>
    </section>
  );
};

export default Imprint;
