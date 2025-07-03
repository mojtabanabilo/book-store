import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getLocalStorage } from "@/utils/customHooks/localStorage";

export const useSettingStore = defineStore("setting", () => {
  const lang = ref(getLocalStorage("lang") || "fa");
  const theme = ref(getLocalStorage("theme") || "theme-light");

  const direction = computed(() => (lang.value === "fa" ? "rtl" : "ltr"));
  const themeMode = computed(() => (theme.value === "theme-dark" ? "dark" : "light"));

  return {
    lang,
    theme,
    direction,
    themeMode
  };
});
