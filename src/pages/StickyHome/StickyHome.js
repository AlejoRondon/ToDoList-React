import React from "react";
// import Navbar from "../../atoms/Navbar/Navbar";
// import StickyNote from "../../molecules/StickyNote/StickyNote";
import StickyForm from "../../molecules/StickyList/StickyList";
import * as data from "../../stickyDB.json";
export default class StickyNotes extends React.Component {
  state = {
    stickyDB: data.data
  };
  // componentDidMount() {

  // }
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="container">
          <StickyForm stickyDB={this.state.stickyDB} />
        </div>
      </React.Fragment>
    );
  }
}
