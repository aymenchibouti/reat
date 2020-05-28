import React, { Component } from "react";
import Test from "./Test";
import Items from "./component/items";
class App extends Component {

  state = {
    items: [
      { id: 1, name: "aymen", age: "27" },
      { id: 2, name: "minou", age: "25" },
      { id: 3, name: "koko", age: "21" }
    ]
  }
  render() {
    return (
      <div>
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
