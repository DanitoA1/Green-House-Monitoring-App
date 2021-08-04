import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Login from '../views/Login.vue'
import { auth } from '../firebase';

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/settings",
    name: "settings",
    component: Settings,
    meta: {
      requireAuth: true,
    },
  },

  {
    path: "/greenhouse",
    name: "Home",
    component: Home,
    meta: {
      requireAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requireAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
