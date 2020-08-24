import React from "react";
import "./StickyNote.css";
import MD5Encoder from "md5";
import { Link } from "react-router-dom";
class StickyNote extends React.Component {
  render() {
    let hash = MD5Encoder(this.props.email);
    console.log("hash1", hash);
    return (
      <div className="card text-center">
        <div className="card-header">{this.props.email}</div>
        <img
          src={`https://www.gravatar.com/avatar/${hash}?s=250?&d=identicon&r=PG`}
          alt="avatar"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <hr />
          <p className="card-text">{this.props.cardDescription}</p>
          {!this.props.onCreation && (
            <Link to="#" className="btn btn-primary">
              Do something
            </Link>
          )}
          {/* {!this.props.onCreation ? (
            <Link to="#" className="btn btn-primary">
              Do something
            </Link>
          ) : null} */}
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}

export default StickyNote;
