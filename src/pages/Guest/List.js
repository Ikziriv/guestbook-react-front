import React, { Fragment, useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const GuestList = ({ allGuest, setGuestChange }) => {
  const [guest, setGuest] = useState([]);
  // Delete
  const deleteGuest = async (id) => {
    try {
      await fetch(`http://localhost:3000/guest/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.jwt_token },
      });
      toast("Record has been deleted!!!", {
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
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setGuest(allGuest);
  }, [allGuest]);

  return (
    <Fragment>
      <div
        className="w-full bg-white rounded px-4 md:px-8 py-2 relative border-l-4 border-red-800 shadow-md"
        style={{ height: "333px" }}
      >
        <div className="modal-body">
          <div className="w-full h-auto">
            <div className="flex flex-wrap">
              <div className="w-full h-10 bg-white shadow">
                <div className="flex flex-wrap">
                  <div className="w-3/6 h-10">
                    <div className="px-4 py-3 text-xs uppercase">
                      <span className="font-bold">Identitas</span>
                    </div>
                  </div>
                  <div className="w-2/6 h-10">
                    <div className="px-4 py-3 font-bold text-xs uppercase">
                      Description
                    </div>
                  </div>
                  <div className="w-1/6 h-10"></div>
                </div>
              </div>
              {guest.map((gst) => (
                <div className="w-full h-10 bg-white shadow" key={gst.id}>
                  <div className="flex flex-wrap">
                    <div className="w-3/6 h-10">
                      <div className="px-4 py-3 text-sm">
                        <span className="mr-8 text-xs">{gst.phone}</span>
                        <span className="font-thin">{gst.name}</span>
                      </div>
                    </div>
                    <div className="w-2/6 h-10">
                      <div className="px-4 py-3 text-sm">
                        <span>{gst.description}</span>
                      </div>
                    </div>
                    <div className="w-1/6 h-10">
                      <div className="flex justify-end">
                        <div className="flex flex-row">
                          <div className="text-gray-700 text-center hover:bg-yellow-400 bg-gray-600 px-4 py-3 mr-1">
                            <MdEdit />
                          </div>
                          <div
                            onClick={() => deleteGuest(gst.id)}
                            className="text-gray-700 text-center hover:bg-red-400 bg-gray-600 px-4 py-3 mr-1"
                          >
                            <MdDelete />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GuestList;
