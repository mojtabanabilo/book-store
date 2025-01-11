import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n/configs";

import App from "./App.vue";
import router from "./router/router";
import Pagination from "./components/Pagination.vue";
import Button from "./components/Button.vue";

const app = createApp(App);

app.component("pagination", Pagination)
app.component("Button", Button)

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
