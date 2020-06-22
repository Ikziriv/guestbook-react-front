import React, { Fragment, useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import Footer from "../../components/Footer.js";
import GuestList from "./List";

const Guest = () => {
  const [allGuest, setAllGuest] = useState([]);
  const [guestChange, setGuestChange] = useState(false);
  const [name, setName] = useState("");
  // Search
  const getSearchResult = async (e) => {
    e.preventDefault();

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.jwt_token);

      const response = await fetch(
        `http://localhost:3000/guest/search?name=${name}`,
        {
          method: "GET",
          headers: myHeaders,
        },
      );

      const jsonData = await response.json();
      setAllGuest(jsonData);
      setName("");
    } catch (err) {
      console.error(err.message);
    }
  };
  const getGuest = async () => {
    try {
      const response = await fetch("http://localhost:3000/guest", {
        method: "GET",
        headers: { jwt_token: localStorage.jwt_token },
      });
      const jsonData = await response.json();

      setAllGuest(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  // Load Guest
  useEffect(() => {
    getGuest();
    setGuestChange(false);
  }, [guestChange]);
  return (
    <Fragment>
      <div className="absolute top-0 inset-x-0">
        <div className="w-full galaxy-s5:h-auto sm:h-auto h-64 transform rotate-180 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eb1c2d"
              fillOpacity="1"
              d="M0,320L120,298.7C240,277,480,235,720,224C960,213,1200,235,1320,245.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-full p-2 px-2 md:px-24 mb-2 md:mb-2 z-10 px-10 mt-24 md:mt-40 z-40">
        <div className="flex flex-wrap py-1 p-2 px-2 md:px-0 mb-0 md:mb-2">
          <div className="galaxy-s5:w-full w-1/2">
            <div className="text-left text-gray-700 font-bold tracking-widest py-4 uppercase text-2xl border-b-2 border-gray-300">
              <span className="text-gray-600">Guest</span>
              <span className="text-gray-800 font-thin">book</span>
              <span className="text-gray-800 font-thin">List</span>
            </div>
          </div>
          <div className="galaxy-s5:w-full w-1/2">
            <div className="flex justify-end bg-transparent py-1 mt-4 sm:mr-2 mr-10">
              <form className="w-full max-w-sm" onSubmit={getSearchResult}>
                <div className="flex items-center bg-transparent border border-gray-4 rounded">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-4 leading-tight focus:outline-none"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search"
                  />
                  <button className="flex-shrink-0 py-1 text-sm px-1 rounded">
                    <GrSearch />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="screen-xl:w-full p-2">
          {/* Content List */}
          <GuestList allGuest={allGuest} setGuestChange={setGuestChange} />
          {/* End Content List */}
        </div>

        <div className="absolute bottom-0 inset-x-0">
          <div className="p-2 px-12 md:px-24 mb-12 md:mb-12">
            <div className="bg-transparent py-1">
              <div className="flex justify-start">
                <img
                  className="h-auto w-24"
                  src="https://www.alfadigital.id/images/call-centre-1500860.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Guest;
