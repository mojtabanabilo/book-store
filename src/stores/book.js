import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api/index";
import { notify } from "@/utils/hook/toastify";

export const useBook = defineStore("book", () => {
  const initialState = reactive({
    data: [],
    page: 1,
    totalPages: 1,
    totalBooks: 0,
    limit: 10,
    isLoading: false,
    error: null,
  });

  const nextPage = async () => {
    if (initialState.page < initialState.totalPages) {
      initialState.page++;
      await getBook(initialState.page);
    }
  };

  const previousPage = async () => {
    if (initialState.page > 1) {
      initialState.page--;
      await getBook(initialState.page);
    }
  };

  const searchByTitle = (title) => {
    const searchUser = title._value
    if (!searchUser.trim()) {
      return
    }
    initialState.data = initialState.data.filter((i) =>
      i.title.toLowerCase().includes(searchUser.toLowerCase())
    );
  };

  const sortByPrice = (price) => {
    if (!price) {
      return
    }
    if (price === 'lowest') {
      initialState.data = initialState.data.sort((a, b) => a.price - b.price)
    } else if (price === 'highest') {
      initialState.data = initialState.data.sort((a, b) => b.price - a.price)
    }
  }

  const getBook = async (page) => {
    initialState.isLoading = true;
    initialState.error = null;
    try {
      const response = await axiosInstance.get(
        `/book?page=${page}&limit=${initialState.limit}`
      );
      initialState.data = response.data;
      initialState.sortByTitle = response.data;
      initialState.page = response.page;
      initialState.totalPages = response.totalPages;
      initialState.totalBooks = response.totalBooks;
    } catch (e) {
      initialState.error = e;
      initialState.isLoading = false;
      notify(
        initialState.error.message || "An error occurred during registration."
      );
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, getBook, nextPage, previousPage, searchByTitle, sortByPrice };
});
