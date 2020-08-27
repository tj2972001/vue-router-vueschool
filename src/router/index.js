import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Brazil from "../views/Brazil";
//import Panama from "../views/Panama";
//import Jamaica from "../views/Jamaica";
//import Hawaii from "../views/Hawaii";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import("../views/Brazil"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import("../views/Jamaica"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import("../views/Panama"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component() {
      return import(/* webpackChunkName: "about" */ "../views/Hawaii");
    },
  },
  {
    path: "/details/:id",
    name: "destinationDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DestinationDetail"),
  },
];

const router = new VueRouter({
  linkActiveClass: "travel-app-active-link",
  mode: "history",
  routes,
});

export default router;
