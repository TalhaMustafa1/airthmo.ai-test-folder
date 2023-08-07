import React from 'react';
import AboutUsImage from '../assets/AboutUsImage.jpg';

const AboutUs = () => {
  return (
    <section className="max-w-6xl m-auto my-16 px-4 py-2">
      <div className="flex justify-between flex-wrap">
        <div>
          <h2 className="text-[32px] text-[#0029FF] font-bold md:text-[40px]">
            About
          </h2>
          <div className="max-w-[500px]">
            <p className="my-4">
            The idea behind arithmo.ai is helping both small and large businesses make 
            the digital leap while guiding them every step of the way. We truly understand 
            that a great deal of companies hesitate when it comes to managing and processing 
            unstructured data in the cloud — this is 
            why we dedicated ourselves to building a highly secure and well monitored
            platform that is ahead of its time in terms of functionality, 
            while remaining affordable for both individuals and SMBs and an increase 
            in time efficiency for large companies at the same time.
            </p>
            <p className="my-4">
            Using arithmo.ai does not only mean digizing your documents 
            — it's will also save you countless man-hours and money you can spend otherwise.
            </p>
            <p className="my-4">
            <ul className="text-[#111] text-[16px] font-medium">
          <li>arithmo.ai - a Product of arithmo  </li>
          <li>Lange Hauptstraße 9/22</li>
          <li>Hamburg</li>
          <li>Germany</li>
        </ul>
            </p>
          </div>
        </div>
        <div>
          <img src={AboutUsImage} alt="About Us" width={600} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
