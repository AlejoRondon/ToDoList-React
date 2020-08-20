import React from "react";
import StickyNote from "../../molecules/StickyNote/StickyNote";
import Navbar from "../../atoms/Navbar/Navbar";
import StickyForm from "../../molecules/StickyForm/StickyForm";

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
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <StickyNote
                email={this.state.form.email}
                cardTitle={this.state.form.title}
                cardDescription={this.state.form.description}
              />
            </div>
            <div className="col-6">
              <StickyForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
