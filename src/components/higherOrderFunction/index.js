import React, { Component } from "react";

class HigherOrderFunction extends Component {
  render() {
    return (
      <div>
        <h1>高阶函数</h1>
        {this.props.children}
      </div>
    );
  }
}

export default HigherOrderFunction;
