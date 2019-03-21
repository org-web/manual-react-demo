import React, { Component } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

// import Home from "./components/home";
// import RenderProps from "./components/renderProps";
import Header from "./components/header";
import asyncComponent from "./components/asyncComponent";

const Home = asyncComponent(() => {
  return import("./components/home");
});
const RenderProps = asyncComponent(() => {
  return import("./components/renderProps");
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/renderProps" component={RenderProps} />
        </div>
      </Router>
    );
  }
}

export default App;

ReactDom.render(<App />, document.getElementById("root"));
