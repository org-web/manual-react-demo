import React, { Component } from "react";
import { Button, WhiteSpace } from "antd-mobile";

class Welcome extends Component {
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
        <WhiteSpace />
        <Button
          type="primary"
          onClick={() => {
            this.jumpByPath("/Home");
          }}
        >
          Home
        </Button>
        <WhiteSpace />
      </div>
    );
  }
}

export default Welcome;
