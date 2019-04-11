import React, { Component } from "react";
import { Button, WhiteSpace } from "antd-mobile";

class Home extends Component {
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
        <h1>首页</h1>
        <WhiteSpace />
        <Button
          type="primary"
          onClick={() => {
            this.jumpByPath("/RenderProps");
          }}
        >
          RenderProps
        </Button>
        <WhiteSpace />
      </div>
    );
  }
}

export default Home;
