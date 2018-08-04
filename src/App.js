import React, { Component } from "react";
import { 
  NavBar, 
  Header, 
  Section1, 
  Section2, 
  Section3,
  Section35,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9} from "./components";

class App extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#283136';
  }
  render() {
    return (
      <div className="container-fluid no-gutters px-0">
        <section>
          <NavBar />
        </section>
        <section>
          <Header />
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
          <Section35 />
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
