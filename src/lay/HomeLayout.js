import React, { PureComponent } from "react";

export default class HomeLayout extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundColor: "#ccc", minHeight: window.innerHeight }}>
        <h1>HomeLayout</h1>
        {this.props.children}
      </div>
    );
  }
}
