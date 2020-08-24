import React from "react";
import StickyNote from "../../molecules/StickyNote/StickyNote";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default function StickyDetails(props) {
  const modalElement = document.getElementById("modal");
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
            <button onClick={this.openModal} className="btn btn-danger">
              Delete
            </button>
            {ReactDOM.createPortal(<h1>holas</h1>, modalElement)}
          </div>
        </div>
      </div>
    </div>
  );
}
