import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/constans/routes";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.UMain,
      name: "Main",
      component: () => import("@/pages/Main.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: routes.USignUp,
      name: "SignUp",
      component: () => import("@/pages/SignUp.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: routes.ULogin,
      name: "Login",
      component: () => import("@/pages/Login.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: routes.UBookList,
      name: "BookList",
      component: () => import("@/pages/BookList.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: routes.UProductsList,
      name: "UProductsList",
      component: () => import("@/pages/ProductsList.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: routes.notFound,
      name: "NotFound",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, _, next) => {
  const store = useAuthStore();
  const isAuthenticated = store.token;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" }); 
  } else if ((to.name === "Login" || to.name === "SignUp") && isAuthenticated) {
    next({ name: "Main" });
  } else {
    next();
  }
});

export default router;
