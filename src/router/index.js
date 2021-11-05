import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About.vue";
import Shop from "@/views/Shop.vue";
import Contact from "@/views/Contact.vue";
import Clothes from "@/views/Clothes.vue";
import Collections from "@/views/Collections.vue";
import Accessories from "@/views/Accessories.vue";

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About,
  }, {
    path: '/shop',
    name: 'shop',
    component: Shop,
    redirect: '/clothes'
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact,
  }, {
    path: '/clothes',
    name: 'clothes',
    component: Clothes
  }, {
    path: '/collections',
    name: 'collections',
    component: Collections

  }, {
    path: '/accessories',
    name: 'accessories',
    component: Accessories
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;