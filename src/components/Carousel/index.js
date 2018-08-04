import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import Jumbo from "../../assets/images/jumbo.jpg";
import chrisCharles from "../../assets/images/MainPageChrisCharles.png";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Parallax
        blur={8}
        bgImage={Jumbo}
        bgImageAlt="mma"
        strength={350}
        className="pt-2"
      >
        <div className="container-fluid h-100">
          <div className="row justify-content-center">
            <div className="col-6 align-self-center">
              <div className="col-md-8 mx-auto text-white">
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.
                </p>
                <p>
                  <a className="btn btn-lg btn-danger px-5" href="#">
                    Request Your Consultation
                  </a>
                </p>
              </div>
            </div>

            <div className="col-6 align-self-center">
              <div className="col-md-8">
                <img
                  className="img-fluid"
                  style={{ marginBottom: "-10px" }}
                  alt="Chris & Charles"
                  src={chrisCharles}
                />
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default Carousel;
