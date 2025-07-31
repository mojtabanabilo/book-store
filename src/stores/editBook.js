import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api";
import { notify } from "@/utils/hook/toastify";

export const useEditBook = defineStore("edit-book", () => {
  const initialState = reactive({
    isLoading: false,
    error: null,
  });

  const editBookById = async (id, data) => {
    initialState.isLoading = true;
    initialState.error = null;
    try {
      await axiosInstance.put(`/book/${id}`, data);
    } catch (e) {
      initialState.error = e;
      notify(
        initialState.error.message || "An error occurred during deletion."
      );
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, editBookById };
});
