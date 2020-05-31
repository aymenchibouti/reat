import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Rout from "./component/Rout";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Blog" component={Blog} />
            <Route path="/:valeur" component={Rout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
