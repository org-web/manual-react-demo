import lazyLoad from "../lay/lazyLoad";
import HomeLayout from "../lay/HomeLayout";

export const getRouteData = () => {
  const routerConfig = {
    "/": {
      module: lazyLoad(() => import("../components/home")),
      layout: HomeLayout
    },
    "/RenderProps": {
      module: lazyLoad(() => import("../components/renderProps")),
      layout: HomeLayout
    },
    "*": {
      module: lazyLoad(() => import("../components/renderProps")),
      layout: HomeLayout
    }
  };

  const routeData = [];
  for (let [k, v] of Object.entries(routerConfig)) {
    routeData.push({
      path: k,
      component: v.module,
      layout: v.layout
    });
  }
  console.log("routers---", routeData);

  return routeData;
};
