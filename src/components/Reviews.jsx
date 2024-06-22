import React from "react";
import imgs from "../assets/image/png/earnman.jpeg";
import Slider from "react-slick";

const Reviews = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-[#E3D6C6]">
      <div className="container max-w-[1140px] px-4 mx-auto ">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-[#1B2541] opacity-90 lg:!leading-[55px] mt-3 text-center">
          Best Online Rummy Game Experience
        </h2>
        <Slider {...settings} className=" mt-6">
          <div className="relative w-full rounded-2 px-2 md:px-4 py-8 overflow-y-auto client-testimonial">
            <img className="rounded-3xl" src={imgs} alt="img" />
          </div>
          <div className="relative w-full rounded-2 px-2 md:px-4 py-8 overflow-y-auto client-testimonial ">
            <img className="rounded-3xl" src={imgs} alt="img" />
          </div>
          <div className="relative w-full rounded-2 px-2 md:px-4 py-8 overflow-y-auto client-testimonial ">
            <img className="rounded-3xl" src={imgs} alt="img" />
          </div>
          <div className="relative w-full rounded-2 px-2 md:px-4 py-8 overflow-y-auto client-testimonial ">
            <img className="rounded-3xl" src={imgs} alt="img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
