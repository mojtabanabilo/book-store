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
          sort: "Sort",
        },
        bookList: {
          bookCode: "Book code",
          ISBN: "ISBN",
          format: "Format",
          numberPages: "Number of Pages",
          yearPublication: "Year of Publication",
          printSeries: "Print Series",
          btnPurchase: "Purchase",
        },
        productsList: {
          searchPlaceHolder: "Book Search",
          addBooks: "Add Book",
          bookManagment: "Book Managment",
        },
        deleteModal: {
          deleteTitle: 'Are you sure you want to delete this book?',
          removeBtn: 'Delete',
          cancelBtn: 'Cancel'
        },
        addModal: {
          title: 'Add new book',
          bookName: 'Book name',
          authorName: 'Author name',
          summary: 'Summary',
          count: 'Count',
          price: 'Price',
          create: 'Create',
          cancel: 'Cancel'
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
          sort: "مرتب سازی",
        },
        bookList: {
          bookCode: "کد کتاب",
          ISBN: "شابک",
          format: "قطع",
          numberPages: "تعداد صفحه",
          yearPublication: "سال انتشار",
          printSeries: "سری چاپ",
          btnPurchase: "خرید",
        },
        productsList: {
          searchPlaceHolder: "جستجوی کتاب",
          addBooks: "افزودن کتاب",
          bookManagment: "مدیریت کتاب",
        },
        deleteModal: {
          deleteTitle: 'آیا از حذف این کتاب اطمینان دارید؟',
          removeBtn: 'حذف',
          cancelBtn: 'لغو'
        },
        addModal: {
          title: 'ایجاد کتاب جدید',
          bookName: 'نام کتاب',
          authorName: 'نام نویسنده',
          summary: 'خلاصه',
          count: 'تعداد',
          price: 'قیمت',
          create: 'ایجاد',
          cancel: 'انصراف'
        }
      },
    },
  },
});

export default i18n;
