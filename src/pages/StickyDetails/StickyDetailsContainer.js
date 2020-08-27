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
      },
      modalIsOpen: false
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
  handleOpenModal = (e) => {
    this.setState({
      ...this.state,
      modalIsOpen: true
    });
    console.log(this.state);
  };
  handleCloseModal = (e) => {
    this.setState({ ...this.state, modalIsOpen: false });
  };
  handleDeleteStickyNote = (e) => {
    data.data.splice(this.indexOfFiltered, 1);
    console.log("Element was delete");
    this.props.history.push("/stickynotes");
  };
  render() {
    return (
      <StickyDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        badgeInfo={this.state.badgeInfo}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteStickyNote={this.handleDeleteStickyNote}
      />
    );
  }
}
