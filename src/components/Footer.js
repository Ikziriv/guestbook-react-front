import React from "react";
import "../css/tailwind.css";

const Footer = () => {
  return (
    <div className="absolute bottom-0 inset-x-0 z-0 sm:hidden block">
      <div className="w-full h-auto relative">
        <div className="absolute bottom-0 inset-x-0">
          <div className="flex justify-end z-10">
            <div className="mr-24 py-6">
              <div className="text-xs text-white font-normal uppercase">
                <small>COPYRIGHT 2020. IKZIRIV. ALL RIGHTS RESERVED.</small>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#eb1c2d"
            fillOpacity="1"
            d="M0,320L120,298.7C240,277,480,235,720,224C960,213,1200,235,1320,245.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
