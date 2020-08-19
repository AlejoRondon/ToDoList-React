import React from "react";
// import "./styles.css";
import StickyNote from "./molecules/StickyNote/StickyNote";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {/* <div className="col-4"> */}
          <StickyNote
            email="blackphotografy@gmail.com"
            cardTitle="Market"
            cardDescription="Buy milk"
          />
          <StickyNote
            email="blackphotografy@gmail.com"
            cardTitle="Market"
            cardDescription="Buy milk"
          />
          <StickyNote
            email="blackphotografy@gmail.com"
            cardTitle="Market"
            cardDescription="Buy milk"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
