import { toast } from "vue3-toastify";
import { useSettingStore } from "@/stores/setting";
const store = useSettingStore();

const options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  rtl: store.direction,
  theme: store.themeMode,
};

export const notify = (message, type) => {
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
