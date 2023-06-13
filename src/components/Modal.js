

import React from 'react';
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='container'>
      <div className='titleClose'>
        <button onClick={()=> closeModal(false)}>x</button>
      </div>
      <div className='title'>
        <h2>Are You Sure You Want to Continue?</h2>
      </div>
      <div className='body'>
        <p>The Next Page is Awesome! You Will Enjoy It.</p>
      </div>
      <div className='footer'>
        <button onClick={()=> closeModal(false)} className='cancelBtn'>Cancel</button>
        <button className='continueBtn'>Continue</button>
      </div>
      </div>
    </div>
  )
}

export default Modal