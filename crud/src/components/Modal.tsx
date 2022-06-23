import React from "react";
import Modal from "react-modal";
import AddPost from "./AddPost";

function ModalInFunctionalComponent({
  isOpen,
  setModalIsOpenToFalse,
  editPost,
  editData,
}: {
  isOpen: boolean;
  setModalIsOpenToFalse: (e: React.MouseEvent<HTMLElement>) => void;
  editPost: boolean;
  editData: string;
}) {
  return (
    <div>
      <Modal
        style={{
          content: {
            position: "absolute",
            top: "80px",
            left: "300px",
            right: "300px",
            bottom: "100px",
            border: "1px solid #ccc",
          },
        }}
        isOpen={isOpen}
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      >
        {/* // @ts-expect-error  check  */}
        <button onClick={setModalIsOpenToFalse}>x</button>
        <AddPost editPost={editPost} editData={editData} />
      </Modal>
    </div>
  );
}

export default ModalInFunctionalComponent;
