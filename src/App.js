import React, { Component } from "react";
import { 
  NavBar, 
  Jumbotron, 
  Carousel, 
  Section1, 
  Section2, 
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9} from "./components";

class App extends Component {
  render() {
    return (
      <div className="container-fluid no-gutters px-0">
        <section>
          <NavBar />
        </section>
        <section>
          <Jumbotron />
        </section>
        <section>
          <Carousel />
        </section>
        <section  className="p-3">
          <Section1 />
        </section>
        <section className="p-3">
          <Section2 />
        </section>
        <section className="p-3">
          <Section3 />
        </section>
        <section className="p-3">
          <Section4 />
        </section>
        <section className="p-3">
          <Section5 />
        </section>
        <section className="p-3">
          <Section6 />
        </section>
        <section className="p-3">
          <Section7 />
        </section>
        <section className="p-3">
          <Section8 />
        </section>
        <section>
          <Section9 />
        </section>
      </div>
    );
  }
}

export default App;