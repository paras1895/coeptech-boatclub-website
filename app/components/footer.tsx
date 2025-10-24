"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const arr = [
    "HOME",
    "ABOUT US",
    "ADMINISTRATION",
    "ADMISSION",
    "ACADEMICS",
    "STUDENT CORNER",
    "RESEARCH",
    "FACILITIES",
    "USEFUL LINKS",
  ];

  return (
    <footer className="bg-[#0d2451] text-white py-12">
      <div className="flex px-[10px] sm:px-[0px]">
        {/* Left Section */}
        <div className="sm:pl-[7vw] sm:w-[50vw]">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="2.svg"
              alt="COEP Logo"
              className="sm:w-30 sm:h-30 object-contain"
            />
            <div>
              <h3 className="font-semibold text-md">
                COEP Technological University
              </h3>
              <p className="text-sm">
                Wellesely Rd, Shivajinagar, Pune - 411 005.
                <br className="hidden sm:block"/>
                Maharashtra, INDIA.
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-evenly sm:justify-normal space-x-4 mt-6 pt-[5vh]">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-2xl hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-gray-300" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-2xl hover:text-gray-300" />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <FaXTwitter className="text-2xl hover:text-gray-300" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-2xl hover:text-gray-300" />
            </a>
          </div>

          {/* Bottom links */}
          <div className="mt-8 space-y-2 px-[20px] sm:px-[0px] font-semibold text-[12px] flex sm:block justify-evenly sm:justify-normal pt-[1.5vh]">
            <a href="#" className="block hover:underline">
              CONTACT US
            </a>
            <a href="#" className="block hover:underline">
              PRIVACY POLICY
            </a>
            <a href="#" className="block hover:underline">
              DISCLAIMER
            </a>
          </div>

          {/* Back to top */}
          <div className="hidden sm:block mt-8 pt-[3vh]">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] border-gray-700 px-[30px] py-[14px] flex items-center space-x-2 hover:bg-white hover:text-[#0d2451]"
            >
              <span>↑</span>
              <span className="text-[12px]">BACK TO TOP</span>
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="hidden sm:block w-[40vw] pl-[5vw]">
          <h4 className="text-xl font-semibold mb-4 pb-[5px]">Navigate</h4>
          <ul className="space-y-2 text-[12px] font-semibold">
            {arr.map((item) => (
              <li key={item} className="py-[3px]"><a>{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden sm:block w-[50vw]">
          <h4 className="text-xl font-semibold mb-4">COEP History</h4>
          <p className="text-sm leading-relaxed mb-6 w-[27vw] text-[16px]">
            COEP's precursor, The Poona Engineering Class and Mechanical School
            was opened in July 1854, with an aim to provide suitable learning to
            the subordinate officers in the Public Works Department. The School
            was situated in Bhawani Peth, Poona, and the accommodation consisted
            of three small detached houses for teaching purposes and a separate
            house for the Principal...
          </p>
          <a
            href="#"
            className="border-[2px] border-white px-[30px] py-[14px] font-semibold inline-block hover:bg-white hover:text-[#0d2451] transition"
          >
            Read More About Our History
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
