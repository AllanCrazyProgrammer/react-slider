import React, { Component } from "react";
import "./App.css";
import Slider from "./components/slider/slider.jsx";
import TextBox from "./components/textBox/TextBox.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TextBox />
        <Slider />
      </React.Fragment>
    );
  }
}

export default App;
