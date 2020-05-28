import React, { Component } from "react";
import Test from "./Test";
class App extends Component {

  state = {
    name: ""
  }
  handlChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmit}>
          <div className="form-group">
            <select onChange={this.handlChange}>
              <option value="value 1">value 1</option>
              <option value="value 2">value 2</option>
              <option value="value 3">value 3</option>
            </select>
          </div>
          <button>submit</button>
        </form>
        {this.state.name}
      </div >
    );
  }
}

export default App;
