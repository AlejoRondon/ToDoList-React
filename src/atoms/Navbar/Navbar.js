import React from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <Link className="navbar-brand" to="/stickynotes">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            <span className="font-weight-light">Sticky</span>
            <span>Notes</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/stickynotes">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-link " to="/stickynotes/new">
                new
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
