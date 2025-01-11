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
        main: {
          title: "All books",
          sort: "Sort"
        },
        bookList: {
          bookCode: "Book code",
          ISBN: "ISBN",
          format: "Format",
          numberPages: "Number of Pages",
          yearPublication: "Year of Publication",
          printSeries: "Print Series",
          btnPurchase: "Purchase"
        }
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
        main: {
          title: "همه کتاب ها",
          sort: "مرتب سازی" 
        },
        bookList: {
          bookCode: "کد کتاب",
          ISBN: "شابک",
          format: "قطع",
          numberPages: "تعداد صفحه",
          yearPublication: "سال انتشار",
          printSeries: "سری چاپ",
          btnPurchase: "خرید"
        }
      },
    },
  },
});

export default i18n;
