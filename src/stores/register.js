import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api";
import { notify } from "@/utils/hook/toastify";

export const useRegisterStore = defineStore("register", () => {
  const initialState = reactive({
    data: [],
    isLoading: false,
    error: null,
  });

  const registerUser = async ({ username, password }) => {
    initialState.data = []
    initialState.isLoading = true;
    initialState.error = null;
    try {
      const response = await axiosInstance.post("/auth/register", { username, password })
      initialState.data.push(response)
      initialState.isLoading = false
    } catch (e) {
      initialState.error = e;
      initialState.isLoading = false;
      notify(initialState.error.message || "An error occurred during registration.");
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, registerUser }
});
