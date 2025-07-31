import { defineStore } from "pinia";
import { ref } from "vue";
import { setTokenCookie, getTokenCookie, clearAuthCookies } from "@/utils/hook/cookie";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(getTokenCookie() || null);

  const setToken = (newToken) => {
    token.value = newToken;
    setTokenCookie(newToken);
  };

  const clearToken = () => {
    token.value = null;
    clearAuthCookies();
  };

  return {
    token,
    setToken,
    clearToken,
  };
});
