import React from 'react';
import CheckMark from './CheckMark';

const Features = () => {
  return (
    <section id="features" className="">
      <div className="my-16 flex justify-center items-center flex-wrap-reverse md:flex-nowrap">
        <div className='flex items-center justify-center'>
        <article className="bg-[#F1F3FA] p-4 flex justify-right md:justify-end items-center max-w-[1100px] flex-wrap">
          {/* Box 1 */}
          <div className="mr-[13px] m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[14px] font-bold">GDPR Compliant</h4>
              <p className="pr-2 font-medium text-[14px] max-w-[230px] leading-6">
                Protects your data in compliance with the European Union GDPR.
                Your Data will only be saved temporarly.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="min-w-[312px] min-h-[140px] m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[14px] font-bold">Fast & Time efficient</h4>
              <p className="font-medium text-[14px] max-w-[220px] leading-6">
                Helps to increase work efficency by a mimum of 10X and gives the
                freedom to focus on your core business.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[14px] font-bold">Easy to use</h4>
              <p className="pr-2 font-medium text-[14px] max-w-[230px] leading-6">
                Designed to be used by everybody. Requires no technical
                knowledge. No coding. {/*If you need help just watch the
                explainatory video here*/}
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="min-h-[162px] m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[14px] font-bold">
                Data Selection & Validation
              </h4>
              <p className="font-medium text-[14px] max-w-[230px] pr-[7px] leading-6">
                You are in full control. You can at any point change Selections,
                Edit, etc. You decide which data you need.
              </p>
            </div>
          </div>

          {/* Box 5 */}
          <div className="min-h-[140px] m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[14px] font-bold">
                No setup required
              </h4>
              <p className="pr-2 font-medium text-[14px] max-w-[230px] leading-6">
                No installation. Running in your Browser and in the Cloud. Use it online at anytime and from anywhere.
              </p>
            </div>
          </div>

          {/* Box 6 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[14px] font-bold">Free</h4>
              <p className="font-medium text-[14px] max-w-[230px] leading-6">
                Start the Free version without any hidden costs. Just Sign up
                and get started. No Credit Card required.
              </p>
            </div>
          </div>
        </article>
        </div>
        <div className="px-16">
          <h2 className="text-[30px] text-[#0029FF] font-bold md:text-[40px]">
            Features
          </h2>
          <h3 className="font-bold text-[#111] text-[18px]">of arithmo.ai</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
