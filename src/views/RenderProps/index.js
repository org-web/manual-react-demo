import React, { Component } from "react";
import { Button, WhiteSpace } from "antd-mobile";

class RenderProps extends Component {
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
        <h1>RenderProps</h1>
        <WhiteSpace />
        <Button
          type="primary"
          onClick={() => {
            this.jumpByPath("/HigherOrderFunction");
          }}
        >
          HigherOrderFunction
        </Button>
        <WhiteSpace />
      </div>
    );
  }
}

export default RenderProps;
