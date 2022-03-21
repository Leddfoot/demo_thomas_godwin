import React from 'react'
import './LPModal.css'
import Button from '../Button/Button'

function LPModal({closeModal}) {
  return (
    <>
    <div className="backdrop"></div>
    <div className="modal">
      <p className="modal__text">This page has a navbar fixed to the top. Until the tests are hidden, the page WILL APPEAR BROKEN (content will scroll behind the test suite, but this is corrected when the test suite is hidden). I recommended running the tests on this page, and then hiding the tests and button. NOTE: Test one will fail because it tests the position of the navbar, which I have temporarily moved down so I could include the test suite.</p>
      <div className="modal__actions">
      <Button onClick={closeModal}>Got it!</Button>

      </div>
    </div>
  </>
  )
}

export default LPModal