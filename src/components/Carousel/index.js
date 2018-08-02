import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import Jumbo from "../../assets/images/jumbo.jpg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Parallax
        blur={0}
        bgImage={Jumbo}
        bgImageAlt="mma"
        strength={350}
        className="pt-2"
      >
        <div className="container-fluid h-100">
          <div className="row align-items-center">
            <div
              className="col-md-12"
              style={{
                minHeight: "800px",
                paddingTop: "25%",
                paddingLeft: "10%"
              }}
            >
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <p>
                <a className="btn" href="#">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default Carousel;
