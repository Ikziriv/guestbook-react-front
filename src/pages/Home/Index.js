import React, { Fragment, useState } from "react";
import posed from "react-pose";
import Footer from "../../components/Footer.js";
import { toast } from "react-toastify";

const ListImg = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
});
const SlideLeftImg = posed.img({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});
const SlideRightImg = posed.img({
  enter: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
});

const Home = (setGuestChange) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, phone, description };
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.jwt_token);

      const response = await fetch("http://localhost:3000/guest", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });
      toast("Record has been saved!!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        window.location = "/guest";
      }, 5000);

      setGuestChange(true);
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className="w-full">
        <div className="absolute top-0 inset-x-0 z-20">
          <div className="w-full galaxy-s5:h-auto sm:h-auto h-64 transform rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#eb1c2d"
                fillOpacity="1"
                d="M0,320L120,298.7C240,277,480,235,720,224C960,213,1200,235,1320,245.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="galaxy-s5:w-full w-1/2 h-screen bg-white relative border-b-8 border-gray-200 z-0">
          <div className="flex flex-wrap content-start h-64 px-10 sm:mt-24 mt-20">
            <div className="w-full p-2 sm:px-2 px-12 sm:mb-24 mb-16">
              <div className="text-left text-gray-700 tracking-widest font-bold py-4 uppercase text-2xl border-b-2 border-gray-300">
                <span className="text-gray-600">Alfa</span>
                <span className="text-gray-800 font-thin">digital</span>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="bg-transparent p-2">
                <ListImg className="flex justify-center">
                  <SlideLeftImg
                    className="sm:h-16 h-20 w-auto"
                    src="https://www.alfadigital.id/images/alfamikro-sq.png"
                  />
                </ListImg>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="bg-transparent p-2">
                <ListImg className="flex justify-center">
                  <SlideLeftImg
                    className="sm:h-16 h-20 w-auto"
                    src="https://www.alfadigital.id/images/alfapop-sq.png"
                  />
                </ListImg>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="bg-transparent p-2">
                <ListImg className="flex justify-center">
                  <SlideLeftImg
                    className="sm:h-16 h-20 w-auto"
                    src="https://www.alfadigital.id/images/alfagift-sq.png"
                  />
                </ListImg>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="bg-transparent p-2">
                <ListImg className="flex justify-center">
                  <SlideRightImg
                    className="h-auto w-32"
                    src="https://www.alfadigital.id/images/alfamind-sq.png"
                  />
                </ListImg>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="bg-transparent p-2">
                <ListImg className="flex justify-center">
                  <SlideRightImg
                    className="h-auto w-32"
                    src="https://www.alfadigital.id/images/alfacart-sq.png"
                  />
                </ListImg>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="bg-transparent p-2">
                <ListImg className="flex justify-center">
                  <SlideRightImg
                    className="h-auto w-32"
                    src="https://www.alfadigital.id/images/alfatrex-sq.png"
                  />
                </ListImg>
              </div>
            </div>
          </div>
          {/* Contact Us */}
          <div className="absolute bottom-0 inset-x-0">
            <div className="w-full p-2 sm:px-12 px-24 sm:mb-12 mb-12">
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
        <div className="galaxy-s5:w-full w-1/2 h-screen bg-transparent relative z-20">
          <div className="flex content-start flex-wrap h-auto px-10 mt-20">
            <div className="w-full p-2 sm:px-2 px-12 mb-4 z-10">
              <div className="text-right text-gray-700 font-bold tracking-widest py-4 uppercase text-2xl border-b-2 border-gray-300">
                <span className="text-gray-600">Guest</span>
                <span className="text-gray-800 font-thin">books</span>
              </div>
            </div>
            <div className="w-full sm:px-2 px-12">
              <form
                className="bg-transparent px-2 md:px-8 pt-6 pb-8 mb-4"
                onSubmit={onSubmitForm}
              >
                <div className="mb-4">
                  <div className="flex flex-wrap">
                    <input
                      className="shadow appearance-none border rounded w-full md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between py-6">
                  <button className="shadow w-full bg-gray-600 hover:bg-blue-800 text-white font-semibold text-sm uppercase py-2 px-4 focus:outline-none focus:shadow-outline tracking-widest">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 z-0 sm:block hidden">
            <div className="w-full h-20" style={{ backgroundColor: "#eb1c2d" }}>
              <div className="flex justify-end">
                <div className="mr-16 py-10">
                  <div className="text-xs text-white font-normal uppercase">
                    <small>COPYRIGHT 2020. IKZIRIV. ALL RIGHTS RESERVED.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
