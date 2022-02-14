import React from "react";
import "./StartupModal.css";

function StartupModal({closeModal}) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <h1 className="modal__title">Do you want to continue?</h1>
        <div className="modal__actions">
        <button onClick={closeModal}>shit</button>
          <a href="/" className="modal__action">
            Yes!
          </a>
          <button
            className="modal__action modal__action--negative"
            type="button"
          >
            No!
          </button>
        </div>
      </div>
    </>
  );
}

export default StartupModal;

