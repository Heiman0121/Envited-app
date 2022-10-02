import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div class="flex flex-col justify-center items-end p-0 gap-[16px]">
        <div class="absolute top-[380px] left-[120px] md:top-[100px] md:left-[170px]">
          <img
            src={`Landing page image.svg`}
            alt=""
            class="w-[311px] h-[548.27px] left-calc[(50% - 311px/2 + 0.5px)] top-[379px] md:w-[440px] md:h-[775.69px] md:left-[calc(50% - 440px/2 - 366px)] md:top-[100px] "
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-end p-0 gap-[16px] ">
        <div class="absolute w-[321px] h-[264px] left-[calc(50%-321px/2)] top-[30px] bottom-[30px] md:w-[574px] md:h-[264px] md:left-[calc(50%-574px/2+309px)] md:top-[306px] top-0">
          <p class="front-Helvetica font-bold text-[64px] leading-none text-right text-[#240D57]">
            Imagine if
            <p class="front-Helvetica font-bold text-[74px] text-right text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
              Snapchat
            </p>
            had events.
          </p>
          <p class="front-Helvetica text-right leading-[28px]">
            Easily host and share events with your friends
            <br /> across any social media.
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center p-[10px] gap-[16px]">
        <button class="absolute w-[320px] h-[55px] left-[calc(50%-320px/2)] md:left-[calc(50%-320px/2+436px)] top-[920px]  md:top-[622px] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] bottom-0">
          <p class="front-Helvetica font-bold text-[20px] text-center leading-[23px] text-[#FFFFFF]">
            <Link to="/create">🎉 Create my event</Link>
          </p>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
