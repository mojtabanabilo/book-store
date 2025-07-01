import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api/index";
import { notify } from "@/utils/hooks/toastify";

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

  const getBook = async (page = 1) => {
    initialState.isLoading = true;
    initialState.error = null;
    try {
      const response = await axiosInstance.get(`/book?page=${page}&limit=${initialState.limit}`);
      initialState.data = response.data;
      initialState.page = response.page;
      initialState.totalPages = response.totalPages;
      initialState.totalBooks = response.totalBooks;
    } catch (e) {
      initialState.error = e;
      initialState.isLoading = false;
      notify(initialState.error.message || "An error occurred during registration.");
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, getBook };
});
