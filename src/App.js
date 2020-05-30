import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Blog" component={Blog} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
