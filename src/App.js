import React, { Component } from "react";
import "./app.css";

export default class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const topBorder = document
        .getElementById("navbar-container")
        .getBoundingClientRect().top;

      topBorder >= 0
        ? document.getElementById("navbar").classList.remove("fixed")
        : document.getElementById("navbar").classList.add("fixed");
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div id="App">
        <section id="navbar-container">
          <nav id="navbar"></nav>
        </section>
      </div>
    );
  }
}
