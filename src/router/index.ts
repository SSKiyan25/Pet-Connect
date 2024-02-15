import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/DashboardViews.vue'
import About from '../views/AboutView.vue'
import ContactUs from '../views/ContactUsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUs,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;