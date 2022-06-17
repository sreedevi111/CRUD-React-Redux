import React, { useState } from "react";
import Modal from "react-modal";
import AddPost from "./AddPost";

function ModalInFunctionalComponent(props) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const setModalIsOpenToTrue =()=>{
  //     setModalIsOpen(true)
  // }
  // const setModalIsOpenToFalse =()=>{
  //     setModalIsOpen(false)
  // }
  let modalIsOpen = props.propsModalIsOpen;
  let setModalIsOpenToFalse = props.propsSetModalIsOpenToFalse;
  let editPost = props.editPost;
  let editData = props.editData;

  console.log("dfsdfsf", modalIsOpen);
  return (
    <>
      <Modal isOpen={modalIsOpen}>
        <button onClick={() => setModalIsOpenToFalse()}>x</button>
        <AddPost editPost={editPost} editData={editData} />
      </Modal>
    </>
  );
}

export default ModalInFunctionalComponent;
