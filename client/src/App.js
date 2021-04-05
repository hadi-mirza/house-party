import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import RoomJoinPage from "./components/RoomJoinPage/RoomJoinPage";
import CreateRoomPage from "./components/CreateRoomPage/CreateRoomPage";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="center">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
