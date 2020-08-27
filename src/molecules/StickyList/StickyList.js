import React from "react";
import StickyNote from "../StickyNote/StickyNote";
// import { Link } from "react-router-dom";
export default class ReactList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled list-inline">
          {this.props.stickyDB.map((stickyNoteInfo) => {
            return (
              <li className="list-inline-item" key={stickyNoteInfo.id}>
                {/* <Link
                  className="text-reset text-decoration-none"
                  to={`/stickynotes/edit/${stickyNoteInfo.id}`}
                > */}
                <StickyNote
                  email={stickyNoteInfo.email}
                  cardTitle={stickyNoteInfo.title}
                  cardDescription={stickyNoteInfo.description}
                  stickyId={stickyNoteInfo.id}
                />
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
