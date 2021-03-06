import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ItemList from "@/views/item-list.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:status?",
    name: "item-list",
    component: ItemList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
