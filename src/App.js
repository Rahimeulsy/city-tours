import React, { Component } from "react";
import Navbar from "./componenets/Navbar/Navbar";
import "./App.scss";
import TourList from "./componenets/TourList";
class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
