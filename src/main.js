import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n/configs";
import "./styles/main.scss";

import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
