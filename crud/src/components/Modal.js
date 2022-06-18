import React from "react";
import Modal from "react-modal";
import AddPost from "./AddPost";

function ModalInFunctionalComponent(props) {
  let modalIsOpen = props.propsModalIsOpen;
  let setModalIsOpenToFalse = props.propsSetModalIsOpenToFalse;
  let editPost = props.editPost; //boolean to change title
  let editData = props.editData; // Data taken during edit

  return (
    <>
      <Modal style={{
    
    content: {
      position: 'absolute',
      top: '80px',
      left: '300px',
      right: '300px',
      bottom: '100px',
      border: '1px solid #ccc',

    }
  }} isOpen={modalIsOpen}>
        <button onClick={() => setModalIsOpenToFalse()}>x</button>
        <AddPost editPost={editPost} editData={editData} />
      </Modal>
    </>
  );
}

export default ModalInFunctionalComponent;
