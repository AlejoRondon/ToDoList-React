import React from "react";
import "./StickyForm.css";

export default class StickyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      title: "",
      description: ""
    };
    console.log("1.Mounting phase: Constructor");
  }

  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });

    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    console.log("Button was clicked");
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submiting form");
    console.log({
      name: e.target.name,
      value: e.target.value
    });
    console.log(this.state);
  };
  render() {
    console.log("1.Mounting phase/2.Updating phase: Render");
    return (
      <div>
        <div className="card text-center w-100">
          <div className="card-header">New StickyNote</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit} action="#" name="newStickyForm">
              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.email}
                />
              </div>

              <div className="form-group">
                <label>Title</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="title"
                  value={this.state.title}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="description"
                  value={this.state.description}
                />
              </div>

              <button
                // type="submit"
                name="submit"
                onClick={this.handleClick}
                className="btn btn-primary"
              >
                Save
              </button>
            </form>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("1.Mounting phase: componentDidMount");
  }
  componentDidUpdate(oldProps, oldState) {
    console.log("2.Mounting phase: componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("3.Mounting phase: componentWillUnmount");
  }
}
