import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <divl>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img className="img-fluid" src={Logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a class="nav-link navbar-btn btn btn-lg m-4" href="#">
                  Home<span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar-btn btn btn-lg m-4" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar-btn btn btn-lg m-4" href="#">
                  Attorney Profiles
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar-btn btn btn-lg m-4" href="#">
                  Areas Of Practice
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item active">
                <a class="nav-link navbar-btn btn btn-lg m-4" href="#">
                  Link <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-btn btn btn-lg m-4 dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                >
                  Dropdown link
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>{" "}
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>{" "}
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div class="dropdown-divider" />{" "}
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </divl>
    );
  }
}

export default NavBar;
