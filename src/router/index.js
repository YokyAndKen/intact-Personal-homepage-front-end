import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => 
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/course',
    name: 'Course',
    component: () => 
      import(/* webpackChunkName: "course" */ '../views/Course.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => 
      import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;