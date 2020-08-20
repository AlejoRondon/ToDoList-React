import React from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
          <a class="navbar-brand" href="#">
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
          </a>
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
              <a class="nav-link " href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-link active" href="#">
                new
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
