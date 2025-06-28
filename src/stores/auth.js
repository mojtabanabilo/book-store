import { defineStore } from "pinia";
import { ref } from "vue";
import { setTokenCookie, getTokenCookie, removeTokenCookie } from "@/utils/hooks/cookie";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(getTokenCookie() || null);

  const setToken = (newToken) => {
    token.value = newToken;
    setTokenCookie(newToken);
  };

  const clearToken = () => {
    token.value = null;
    removeTokenCookie();
  };

  return {
    token,
    setToken,
    clearToken,
  };
});
