import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api";

export const useLoginStore = defineStore("login", () => {
  const initialState = reactive({
    data: [],
    isLoading: false,
    error: null,
  });

  const loginUser = async ({ username, password }) => {
    initialState.data = []
    initialState.isLoading = true;
    initialState.error = null;
    try {
      const response = await axiosInstance.post("/auth/login", { username, password })
      initialState.data.push(response)
      initialState.isLoading = false
    } catch (e) {
      initialState.error = e;
      initialState.isLoading = false;
      window.alert(initialState.error.message || "An error occurred during registration.");
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, loginUser }
});
