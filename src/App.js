import React, { Component } from "react";
import Test from "./Test";
class App extends Component {
  state = {
    name: "aymen"
  }
  handalClick = () => {
    this.setState({
      name: "koko"
    }
    )
  }
  mouselClick() {
    console.log("MouseClick")
  }
  render() {
    return (
      <div>
        <Test />
        <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={this.handalClick}>
          click
        </button>
        <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onMouseOver={this.mouselClick}>onMouseOver</button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
