import lazyLoad from "../layouts/lazyLoad";
import HomeLayout from "../layouts/HomeLayout";

export const getRouteData = () => {
  const routerConfig = {
    "/": {
      module: lazyLoad(() => import("../views/Welcome")),
      layout: HomeLayout
    },
    "/Home": {
      module: lazyLoad(() => import("../views/Home")),
      layout: HomeLayout
    },
    "/RenderProps": {
      module: lazyLoad(() => import("../views/RenderProps")),
      layout: HomeLayout
    },
    "/HigherOrderFunction": {
      module: lazyLoad(() => import("../views/HigherOrderFunction")),
      layout: HomeLayout
    },
    "*": {
      module: lazyLoad(() => import("../views/Welcome")),
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
