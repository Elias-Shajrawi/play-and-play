import React, { useState } from "react";
import Modal from "react-modal";
import "./app.css";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const submitStudentInfo = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const student = Object.fromEntries(data.entries());
    console.log(student);
    toggleModal();
  };

  return (
    <>
      <button onClick={toggleModal} className="btn btn-primary">
        Add Student
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        className="my-custom-modal"
      >
        <h2>Enter Student Information</h2>
        <form className="form-control" onSubmit={submitStudentInfo}>
          <label className="form-label col-form-label h2">Name:</label>
          <input className="form-control" type="text" name="name" />
          <label className="form-label col-form-label h2">Age:</label>
          <input className="form-control" type="number" name="age" />

          <div className="mt-5">
            <button onClick={toggleModal} className="btn btn-warning me-2 p-3">
              Close
            </button>
            <button className="btn btn-success p-3">submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default App;
