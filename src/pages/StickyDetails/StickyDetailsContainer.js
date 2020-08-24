import React from "react";
import * as data from "../../stickyDB.json";
import StickyDetails from "./StickyDetails";

export default class StickyDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeInfo: {
        id: "",
        email: "",
        title: "",
        description: ""
      }
    };
    this.indexOfFiltered = undefined;
  }
  componentDidMount() {
    console.log(data.data);
    let filteredStickyNote = data.data.filter((element, index) => {
      if (element.id === Number(this.props.match.params.stickyId)) {
        this.indexOfFiltered = index;
        return true;
      } else {
        return false;
      }
    });
    if (filteredStickyNote[0]) {
      this.setState({ badgeInfo: filteredStickyNote[0] });
    }
    console.log(filteredStickyNote);
  }
  render() {
    return <StickyDetails badgeInfo={this.state.badgeInfo} />;
  }
}
