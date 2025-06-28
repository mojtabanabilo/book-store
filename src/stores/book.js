import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api";
import { notify } from "@/utils/hooks/toastify";

export const useBook = defineStore("book", () => {
  const initialState = reactive({
    data: [],
    isLoading: false,
    error: null,
  });

  const getBook = async () => {
    initialState.data = []
    initialState.isLoading = true;
    initialState.error = null;
    try {
      const response = await axiosInstance.get("/book")
      initialState.data = response
      initialState.isLoading = false
    } catch (e) {
      initialState.error = e;
      initialState.isLoading = false;
      notify(initialState.error.message || "An error occurred during registration.");
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, getBook }
});
