import Vue from "vue";
import VueRouter from "vue-router";
import Spine from "../views/Spine.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    //name is just another way for identifier other than path. doesnt really matter that much
    name: "SpineYard",
    component: Spine
  },
  {
    path: "/add-spine",
    name: "AddSpineYard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddSpine.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
