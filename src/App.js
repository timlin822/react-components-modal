import {useState} from 'react';

import Modal from 'components/modal/Modal';

import './App.css';

function App() {
  const [modalIsOpen,setModalIsOpen]=useState(false);
  
  const modalOpenHandler=()=>{
    setModalIsOpen(true);
  };

  const modalCloseHandler=()=>{
    setModalIsOpen(false);
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <button className="btn" onClick={modalOpenHandler}>Open Modal</button>
      </div>
      <Modal modalIsOpen={modalIsOpen} modalCloseHandler={modalCloseHandler} />
    </section>
  );
}

export default App;