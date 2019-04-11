import React, { Component } from "react";
import { Button, WhiteSpace } from "antd-mobile";

class HigherOrderFunction extends Component {
  constructor(props) {
    super(props);
  }
  jumpByPath = path => {
    const { history } = this.props;
    history.push({ pathname: path });
  };
  render() {
    return (
      <div>
        <h1>高阶函数</h1>
        <WhiteSpace />
        <Button
          type="primary"
          onClick={() => {
            this.jumpByPath("/Home");
          }}
        >
          Go Home
        </Button>
        <WhiteSpace />
      </div>
    );
  }
}

export default HigherOrderFunction;
