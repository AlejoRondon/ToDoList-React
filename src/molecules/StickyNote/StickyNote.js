import React from "react";
import "./StickyNote.css";
import MD5Encoder from "md5";
// import Gravatar from "react-gravatar";

class StickyNote extends React.Component {
  render() {
    let hash = MD5Encoder("blackphotografy@gmail.com");
    console.log("hash1", hash);

    return (
      <div className="card text-center">
        <div className="card-header">creator@email.com</div>
        <img
          src={`https://es.gravatar.com/avatar/${hash}?s=250`}
          alt="avatar"
        />
        {/* <Gravatar
          email="blackphotografy@gmail.com"
          className="card-img-top"
          size="250"
        /> */}
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <hr />
          <p className="card-text">Brief description of the card.</p>
          <a href="#" className="btn btn-primary">
            Do something
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}

export default StickyNote;
