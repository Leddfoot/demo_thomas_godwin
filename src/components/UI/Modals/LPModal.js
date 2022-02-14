import React from 'react'
import './LPModal.css'

function LPModal({closeModal}) {
  return (
    <>
    <div className="backdrop"></div>
    <div className="modal">
      <h1 className="modal__text">This page has a navbar fixed to the top. But the tests for this page also are up top. The tests are installed via CDN, complete with inline styling, so styling is a pain. I Recommended running the tests on this page, and then hiding the tests and button. NOTE: Test one will fail because it tests the postition of the navbar, which I have temporarily moved down.</h1>
      <div className="modal__actions">
      <button onClick={closeModal}>Got it!</button>

      </div>
    </div>
  </>
  )
}

export default LPModal