import React from "react";
import StickyNote from "../../molecules/StickyNote/StickyNote";
import Navbar from "../../atoms/Navbar/Navbar";
import StickyForm from "../../molecules/StickyForm/StickyForm";

export default class StickyNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <StickyNote
                email="blackphotografy@gmail.com"
                cardTitle="Market"
                cardDescription="Buy milk"
              />
            </div>
            <div className="col-6">
              <StickyForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
