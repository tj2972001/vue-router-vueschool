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
    path: "/details/:id",
    name: "destinationDetail",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DestinationDetail"),
    children: [
      {
        path: ":expId",
        name: "experienceDetail",
        props: true,
        component: () => import("../views/experienceDetail"),
      },
    ],
  },
];

const router = new VueRouter({
  linkActiveClass: "travel-app-active-link",
  mode: "history",
  routes,
});

export default router;
