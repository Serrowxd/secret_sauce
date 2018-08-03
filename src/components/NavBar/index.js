import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark no-gutters">
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

            <ul class="navbar-nav ml-md-auto text-center">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                Availible, days, nights, and weekends!
                </a>
                <a class="nav-link" href="tel:2152575685">
                215-257-5685
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar-btn btn btn-lg m-4" href="#">
                ?
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
    );
  }
}

export default NavBar;
