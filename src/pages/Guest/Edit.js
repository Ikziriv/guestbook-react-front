import React, { Fragment, useState } from "react";
import { MdEdit } from "react-icons/md";

const GuestEdit = ({ guest, setGuestChange }) => {
  const [description, setDescription] = useState(guest.description);

  //edit description function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.jwt_token);

      await fetch(`http://localhost:3000/guest/${guest.id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      setGuestChange(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div
        className="text-gray-700 text-center hover:bg-yellow-400 bg-gray-600 px-4 py-3 mr-1"
        data-toggle="modal"
        data-target={`#id${guest.id}`}
      >
        <MdEdit />
      </div>

      {/*
        id = id10
      */}
      <div
        className="modal"
        id={`id${guest.id}`}
        onClick={() => setDescription(guest.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(guest.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(guest.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GuestEdit;
