import React from "react";
import "./StickyForm.css";

export default class StickyForm extends React.Component {
  render() {
    return (
      <div>
        <div className="card text-center w-100">
          <div className="card-header">New StickyNote</div>
          <div className="card-body">
            <form action="#">
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" name="email" />
              </div>

              <div className="form-group">
                <label>Title</label>
                <input className="form-control" type="text" name="jobTitle" />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input className="form-control" type="text" name="twitter" />
              </div>

              <button className="btn btn-primary">Save</button>
            </form>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
}
