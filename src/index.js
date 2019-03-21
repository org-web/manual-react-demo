import React, { Component } from "react";
import ReactDom from "react-dom";
import { Button } from "antd-mobile";

import "./assets/style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p className="red"> Hello World! </p>
        <Button> Start</Button>
      </div>
    );
  }
}

export default App;

ReactDom.render(<App />, document.getElementById("root"));
