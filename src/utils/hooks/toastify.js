import { toast } from "vue3-toastify";
import { useSettingStore } from "@/stores/setting";

export const notify = (message, type) => {
  const store = useSettingStore();

  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    rtl: store.direction == 'rtl' ? true : false,
    theme: store.themeMode,
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    default:
      toast(message, options);
      break;
  }
};
