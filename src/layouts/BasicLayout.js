import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { getRouteData } from "../routes";

const routes = getRouteData();

export default class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ minHeight: window.innerHeight }}>
        <Switch>
          {routes.map(route => (
            <Route
              exact
              path={route.path}
              key={route.path}
              render={props => {
                let Comp = route.component;
                if (!route.layout) {
                  return <Comp {...props} />;
                } else {
                  let Layout = route.layout;
                  return (
                    <Layout {...props}>
                      <Comp {...props} />
                    </Layout>
                  );
                }
              }}
            />
          ))}
        </Switch>
      </div>
    );
  }
}
