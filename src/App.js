import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Playbill from "./components/playbill";

class App extends Component {
  onClick = e => {
    console.log(e);
  };

  render() {
    const title = "fooo";
    const url =
      "https://virtualplaybill.s3.amazonaws.com/1517893742975_Magellanica";
    return <Playbill onClick={this.onClick} title={title} imageUrl={url} />;
  }
}

export default App;
