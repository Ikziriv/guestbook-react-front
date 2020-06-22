import React from "react";
import "../css/tailwind.css";

const Header = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full h-20" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="clearfix mt-8">
          <div className="float-left">
            <div className="galaxy-s5:ml-0 ml-20">
              <ul className="flex text-xs uppercase font-semibold">
                <li className="ml-6">
                  <div className="text-gray-800 hover:text-green-400">
                    <small>Faqs</small>
                  </div>
                </li>
                <li className="ml-6">
                  <div className="text-gray-800 hover:text-green-400">
                    <small>Privacy and Policy</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="float-right sm:hidden md:block lg:block xl:block">
            <div className="galaxy-s5:mr-24 mr-32">
              <div className="mr-6 text-gray-800 text-xs font-semibold uppercase">
                <small>COPYRIGHT 2020. IKZIRIV. ALL RIGHTS RESERVED.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
