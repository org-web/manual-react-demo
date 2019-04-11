import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import { LocaleProvider } from "antd-mobile";

import BasicLayout from "./layouts/BasicLayout";
// import ScrollToTop from "./ScrollToTop.jsx";
// import { createHistory } from "history";

// import createHistory from "history/createHashHistory";
// import Home from "./components/home";
// import RenderProps from "./components/renderProps";
// import Header from "./components/header";
// import asyncComponent from "./components/asyncComponent";

// const Home = asyncComponent(() => {
//   return import("./components/home");
// });
// const RenderProps = asyncComponent(() => {
//   return import("./components/renderProps");
// });

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <LocaleProvider>
//         <Router>
//           <Header />
//           <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/home" component={Home} />
//             <Route path="/renderProps" component={RenderProps} />
//             {/* <Route path="/" component={BasicLayout} /> */}
//           </div>
//         </Router>
//       </LocaleProvider>
//     );
//   }
// }

// export default App;
// ReactDom.render(<App />, document.getElementById("root"));

// const history = createHistory();
// function init() {
ReactDom.render(
  <LocaleProvider>
    <Router>
      {/* <ScrollToTop> */}
      {/* <Header /> */}
      <div>
        <Route path="/" component={BasicLayout} />
      </div>
      {/* </ScrollToTop> */}
    </Router>
  </LocaleProvider>,
  document.getElementById("root")
);
// }

// init();
