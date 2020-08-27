import React from "react";
import StickyNote from "../../molecules/StickyNote/StickyNote";
import Navbar from "../../atoms/Navbar/Navbar";
import StickyForm from "../../molecules/StickyForm/StickyForm";
import * as data from "../../stickyDB.json";

export default class StickyNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        title: "",
        description: ""
      }
    };
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //   form: {
    //     ...this.state.form,
    //     [e.target.name]: e.target.value
    //   }
    // });
    console.log(data.data);
    data.data.push(this.state.form);
    console.log(data.data);
    this.setState({ stickyDB: data.data });
    console.log("Save data here");
    this.props.history.push("/stickynotes");
  };
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <StickyNote
                email={this.state.form.email}
                cardTitle={this.state.form.title}
                cardDescription={this.state.form.description}
                onCreation="true"
              />
            </div>
            <div className="col-6">
              <StickyForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
