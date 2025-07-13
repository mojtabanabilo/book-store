import { createI18n } from "vue-i18n";
import { getLocalStorage } from "@/utils/hook/localStorage";
const savedLang = getLocalStorage("lang") || "fa";

const i18n = createI18n({
  locale: savedLang,
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
        },
        editModal: {
          title: 'Edit book information',
          bookName: 'Book name',
          authorName: 'Author name',
          summary: 'Summary',
          count: 'Count',
          price: 'Price',
          change: 'Change',
          cancel: 'Cancel'
        },
        registerErrorMessages: {
          emptyUsername: 'username cannot be empty',
          emptyPassword: 'password cannot be empty',
          emptyRepeatPassword: 'repeat password cannot be empty',
          invalidUsername: 'username must be at least 4 characters',
          invalidPassword: 'password must be at least 6 characters',
          invalidRepeatPassword: 'repeat password must match the password',
        },
        bookFilter: {
          title: 'Filter Books',
          searchPlaceholder: 'Search by book title',
          optionPlaceholder: 'Sort by price',
          lowestPrice: 'Lowest Price',
          highestPrice: 'Highest Price',
          btnApply: 'Apply filter',
        },
        notFound: {
          title: 'Page not found',
          description: 'The entered link is incorrect or the page does not exist.',
          button: 'Back to home'
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
        },
        editModal: {
          title: 'ویرایش اطلاعات کتاب',
          bookName: 'نام کتاب',
          authorName: 'نام نویسنده',
          summary: 'خلاصه',
          count: 'تعداد',
          price: 'قیمت',
          change: 'اعمال تغییرات',
          cancel: 'انصراف'
        },
        registerErrorMessages: {
          emptyUsername: 'نام کاربری نمی تواند خالی باشد',
          emptyPassword: 'رمز عبور نمی تواند خالی باشد',
          emptyRepeatPassword: 'تکرار رمز عبور نمی تواند خالی باشد',
          invalidUsername: 'نام کاربری باید حداقل 4 کاراکتر باشد',
          invalidPassword: 'رمز عبور باید حداقل 6 کاراکتر باشد',
          invalidRepeatPassword: 'تکرار رمز عبور باید با رمز عبور مطابقت داشته باشد',
        },
        bookFilter: {
          title: 'فیلتر کتاب‌ ها',
          searchPlaceholder: 'جست و جو بر اساس عنوان کتاب',
          optionPlaceholder: 'مرتب سازی بر اساس قیمت',
          lowestPrice: 'کمترین قیمت',
          highestPrice: 'بیشترین قیمت',
          btnApply: 'اعمال فیلتر',
        },
        notFound: {
          title: 'صفحه مورد نظر پیدا نشد',
          description: 'لینک وارد شده اشتباه است یا صفحه‌ای با این آدرس وجود ندارد.',
          button: 'بازگشت به خانه'
        }
      },
    },
  },
});

export default i18n;
