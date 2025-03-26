import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/constans/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: routes.UMain,
      name: "Main",
      component: () => import("@/pages/Main.vue")
    },
    {
      path: routes.USignUp,
      name: "SignUp",
      component: () => import("@/pages/SignUp.vue")
    },
    {
      path: routes.ULogin,
      name: "Login",
      component: () => import("@/pages/Login.vue")
    },
    {
      path: routes.UBookList,
      name: "BookList",
      component: () => import("@/pages/BookList.vue")
    },
    {
      path: routes.UProductsList,
      name: 'UProductsList',
      component: () => import("@/pages/ProductsList.vue")
    }
  ],
});

export default router;
