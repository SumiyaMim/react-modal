import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <h2>Hey, Click on the Button to Open the Modal.</h2><br></br>
      <button className="openbtn" onClick={()=> setOpenModal(true)}>Open</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;