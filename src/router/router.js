import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/constans/routes";
import { useAuthStore } from "@/stores/auth";
import { useLoginStore } from "@/stores/login";

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
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: routes.notFound,
      name: "NotFound",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

// router.beforeEach((to, _, next) => {
//   const store = useAuthStore();
//   const isAuthenticated = store.token;
//   const role = useLoginStore()
//   if(role.initialState.data.length > 0) console.log(role.initialState)

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next({ name: "SignUp" });
//   } else if ((to.name === "Login" || to.name === "SignUp") && isAuthenticated) {
//     if (role.initialState?.data[0]?.role === 'user') {
//       return next({ name: "Main" });
//     } else if (role.initialState?.data[0]?.role === 'admin') {
//       return next({ name: "UProductsList" });
//     }
//     next();
//   }
// });
router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  const loginStore = useLoginStore();

  const isAuthenticated = authStore.token;
  const role = loginStore.initialState.data?.role;

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: "Login" });
  }

  if ((to.name === "Login" || to.name === "SignUp") && isAuthenticated) {
    if (role === "admin") return next({ name: "UProductsList" })
    else return next({ name: "Main" });
  }

  return next();
});

export default router;
