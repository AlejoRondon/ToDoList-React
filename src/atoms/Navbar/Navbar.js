import React from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
          <Link class="navbar-brand" to="/stickynotes">
            <img
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            <span className="font-weight-light">Sticky</span>
            <span>Notes</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" to="/stickynotes">
                Home <span class="sr-only">(current)</span>
              </Link>
              <Link class="nav-link " to="/stickynotes/new">
                new
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
