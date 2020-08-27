import React from "react";
import StickyNote from "../../molecules/StickyNote/StickyNote";
// import ReactDOM from "react-dom";
// import Modal from "../../molecules/Modal/Modal";
import DeleteModal from "../../molecules/DeleteModal/DeleteModal";

import { Link } from "react-router-dom";

export default function StickyDetails(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <StickyNote
            email={props.badgeInfo.email}
            cardTitle={props.badgeInfo.title}
            cardDescription={props.badgeInfo.description}
            stickyId={props.badgeInfo.id}
            onCreation="true"
          />
        </div>
        <div className="col">
          <h2>Actions</h2>
          <div>
            <Link
              className="btn btn-primary mb-4"
              to={`/stickynotes/edit/${props.badgeInfo.id}`}
            >
              Edit
            </Link>
          </div>
          <div>
            <button onClick={props.onOpenModal} className="btn btn-danger">
              Delete
            </button>
            <DeleteModal
              onClose={props.onCloseModal}
              isOpen={props.modalIsOpen}
              onDeleteStickyNote={props.onDeleteStickyNote}
            />
            {/* I'm the children{" "} */}
            {/* </DeleteModal> */}
          </div>
        </div>
      </div>
    </div>
  );
}
