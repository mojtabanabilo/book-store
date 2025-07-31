import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api";
import { notify } from "@/utils/hook/toastify";

export const useDeleteBook = defineStore("delete-book", () => {
  const initialState = reactive({
    data: [],
    isLoading: false,
    error: null,
  });

  const deleteBookById = async (id) => {
    initialState.isLoading = true;
    initialState.error = null;
    try {
      await axiosInstance.delete(`/book/${id}`);
    } catch (e) {
      initialState.error = e;
      notify(
        initialState.error.message || "An error occurred during deletion."
      );
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, deleteBookById };
});
