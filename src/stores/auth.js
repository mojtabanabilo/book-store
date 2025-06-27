import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getLocalStorage,
  saveLocalStorage,
  removeLocalStorage,
} from "@/utils/hooks/localStorage";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(getLocalStorage("token") || null);

  const setToken = (newToken) => {
    token.value = newToken;
    saveLocalStorage("token", newToken);
  };

  const clearToken = () => {
    token.value = null;
    removeLocalStorage("token");
  };

  return {
    token,
    setToken,
    clearToken,
  };
});
