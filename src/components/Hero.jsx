import React from "react";
import heroImg from "../assets/image/png/earnman.jpeg";
import whatsApp from "../assets/image/png/whatsapp.png";
import telegram from "../assets/image/png/telegram.png";

const Hero = () => {
  return (
    <div>
      <div className="container max-w-[1140px] px-4 mx-auto md:pb-6">
        <div className="flex flex-wrap py-12">
          <div className="w-full md:w-1/2 md:pe-7">
            <img
              className="border-2 border-[#cda677] rounded-3xl w-full"
              src={heroImg}
              alt="hero-add"
            />
          </div>
          <div className="w-full md:w-1/2 md:ps-7 mt-6 md:mt-0">
            <div className="flex flex-col justify-center h-full">
              <span className="font-normal text-sm text-white">
                Trusted by <span className="text-[#cda677]"> 1.7+ crore </span>
                players <span className="text-[#cda677]"> 27,515 online </span>
                players
              </span>
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white opacity-90 lg:!leading-[55px] mt-3">
                Play Big Win Big, Download RummyTime now!
              </h2>
              <div className="flex gap-5 mt-6">
                <img className="w-14 h-14" src={whatsApp} alt="whatsapp" />
                <img className="w-14 h-14" src={telegram} alt="telegram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
