import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosInstance from "@/api";

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
      initialState.data.push(response.data)
      initialState.isLoading = false
    } catch (e) {
      initialState.error = e;
    } finally {
      initialState.isLoading = false;
    }
  };

  return { initialState, registerUser }
});
