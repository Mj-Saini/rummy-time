import React from "react";
import master from "../assets/image/png/master-card.png";
import visa from "../assets/image/png/visa.png";
import rupay from "../assets/image/png/rupay.png";
import paytm from "../assets/image/png/paytm.png";
import juspay from "../assets/image/png/juspay.png";
import cashfree from "../assets/image/png/cashfree.png";
import upi from "../assets/image/png/upi.png";
import banking from "../assets/image/png/net-banking.png";
import certified from "../assets/image/png/iso-certified.png";
import secure from "../assets/image/png/ssl-secure.png";
import rng from "../assets/image/png/rng-certified.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#f0e5d7] mt-5 pt-[50px] pb-[70px]">
        <div className="container max-w-[1140px] px-4 mx-auto md:pb-6">
          <a
            href="/"
            className="font-bold text-4xl text-black capitalize hover:text-[#cda677] duration-300"
          >
            refferal
          </a>

          <div className="flex justify-between  py-[20px] flex-wrap">
            <ul className="md:w-1/4 w-1/2">
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Rummy App</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Rummy Rules</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Cash Rummy</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Rummy Variations</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Indian Rummy</a>
              </li>
            </ul>
            <ul className="md:w-1/4 w-1/2">
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Rummy Tournaments</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Referral Offers</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Testimonials</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Blog</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">FAQs</a>
              </li>
            </ul>
            <ul className="md:w-1/4 w-1/2 mt-4 md:mt-0">
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">About Us</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Contact Us</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Legality</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">RNG Certificate</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Terms</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">CSR Project</a>
              </li>
            </ul>
            <ul className="md:w-1/4 w-1/2 mt-4 md:mt-0">
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">TDS Policy</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">GST Policy</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Cash Withdrawal Policy</a>
              </li>
              <li className="text-base text-[#222a41] duration-300 hover:text-[#cda677] mt-1">
                {" "}
                <a href="#">Fair Play Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex justify-between items-center flex-wrap md:flex-nowrap   ">
            <div className="w-12/12">
              <div>
                <h5 className="text-base mb-4 font-bold">
                  Secured payments by
                </h5>
              </div>
              <div className="flex justify-between flex-wrap gap-3">
                <img className="w-[60px] h-[32px]" src={master} alt="" />
                <img className="w-[60px] h-[32px]" src={visa} alt="" />
                <img className="w-[60px] h-[32px]" src={rupay} alt="" />
                <img className="w-[60px] h-[32px]" src={paytm} alt="" />
                <img className="w-[60px] h-[32px]" src={juspay} alt="" />
                <img className="w-[60px] h-[32px]" src={cashfree} alt="" />
                <img className="w-[60px] h-[32px]" src={upi} alt="" />
                <img className="w-[60px] h-[32px]" src={banking} alt="" />
              </div>
              <div>
                <h5 className="text-base my-4 font-bold">
                  Security and Certification
                </h5>
              </div>
              <div className="flex gap-3 flex-wrap">
                <img className="w-[90px] h-[24px]" src={certified} alt="" />
                <img className="w-[90px] h-[24px]" src={secure} alt="" />
                <img className="w-[90px] h-[24px]" src={rng} alt="" />
              </div>
            </div>
            <div className="w-10/12 md:w-4/12 mt-5 md:mt-0">
              <div>
                <h5 className="text-base mb-4 font-bold">Connect with us</h5>
              </div>
              <div>
                <h5 className="text-base mb-4 font-bold mt-16">
                  Download our apps from:
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
