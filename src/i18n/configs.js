import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "fa",
  fallbackLocale: "en",
  messages: {
    en: {
      roots: {
        signUp: {
          title: "Sign up",
          username: "username",
          password: "password",
          repeatPass: "repeat password",
          submitBtn: "Sign up",
          link: "Do you have account?",
        },
        logIn: {
          title: "Login",
          username: "username",
          password: "password",
          submitBtn: "Login",
          link: "Create an account.",
        },
        main: {},
      },
    },
    fa: {
      roots: {
        signUp: {
          title: "ثبت نام",
          username: "نام کاربری",
          password: "رمز عبور",
          repeatPass: "تکرار رمز عبور",
          submitBtn: "ثبت نام",
          link: "حساب کاربری دیگری دارید؟",
        },
        logIn: {
          title: "ورود",
          username: "نام کاربری",
          password: "رمز عبور",
          submitBtn: "ورود",
          link: "ساخت حساب کاربری جدید.",
        },
        main: {},
      },
    },
  },
});

export default i18n;
