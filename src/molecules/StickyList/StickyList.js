import React from "react";
import StickyNote from "../StickyNote/StickyNote";
export default class ReactList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled list-inline">
          {this.props.stickyDB.map((stickyNoteInfo) => {
            return (
              <li className="list-inline-item" key={stickyNoteInfo.id}>
                <StickyNote email={stickyNoteInfo.email} />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
