import React from "react";
import Navbar from "../../atoms/Navbar/Navbar";
import StickyNote from "../../molecules/StickyNote/StickyNote";
export default class StickyNotes extends React.Component {
  state = {
    stickyDB: [
      {
        id: 1,
        email: "blackphotografy@gmail.com",
        title: "Market",
        description: "Buy portobellos"
      },
      {
        id: 2,
        email: "alejo@gmail.com",
        title: "Home",
        description: "Do the dishes"
      },
      {
        id: 3,
        email: "joselin@gmail.com",
        title: "Bar",
        description: "Drink a bear"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <ul className="list-unstyled list-inline">
            {this.state.stickyDB.map((stickyNoteInfo) => {
              return (
                <li className="list-inline-item" key={stickyNoteInfo.id}>
                  <StickyNote email={stickyNoteInfo.email} />
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
