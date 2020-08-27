import React from "react";
import Navbar from "../../atoms/Navbar/Navbar";

export default function PageLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}
