import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/constans/routes";
import { useAuthStore } from "@/stores/auth";
import { getLocalStorage } from "@/utils/hook/localStorage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.UMain,
      name: "Main",
      component: () => import("@/pages/Main.vue"),
      meta: { requiresAuth: true, requiresAdmin: false },
    },
    {
      path: routes.USignUp,
      name: "SignUp",
      component: () => import("@/pages/SignUp.vue"),
      meta: { requiresAuth: false, requiresAdmin: false },
    },
    {
      path: routes.ULogin,
      name: "Login",
      component: () => import("@/pages/Login.vue"),
      meta: { requiresAuth: false, requiresAdmin: false },
    },
    {
      path: routes.UBookList,
      name: "BookList",
      component: () => import("@/pages/BookList.vue"),
      meta: { requiresAuth: true, requiresAdmin: false },
    },
    {
      path: routes.UProductsList,
      name: "UProductsList",
      component: () => import("@/pages/ProductsList.vue"),
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: routes.notFound,
      name: "NotFound",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();

  const isAuthenticated = authStore.token;
  const role = getLocalStorage('role');

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: "Login" });
  }

  if ((to.name === "Login" || to.name === "SignUp") && isAuthenticated) {
    if (role === "admin") return next({ name: "UProductsList" });
    else return next({ name: "Main" });
  }

  return next();
});

export default router;
