import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n/configs";

import App from "./App.vue";
import router from "./router/router";
import Pagination from "./components/Pagination.vue";
import Button from "./components/Button.vue";
import BaseInput from "./components/BaseInput.vue";
import BaseCombo from "./components/BaseCombo.vue";
import BaseTextarea from "./components/BaseTextarea.vue";
import Table from "./components/Table.vue";
import DeleteModal from "./components/DeleteModal.vue";
import AddModal from "./components/AddModal.vue";
import EditModal from "./components/EditModal.vue";

const app = createApp(App);

app.component("pagination", Pagination)
app.component("Button", Button)
app.component("BaseInput", BaseInput)
app.component("BaseCombo", BaseCombo)
app.component("BaseTextarea", BaseTextarea)
app.component("Table", Table)
app.component("DeleteModal", DeleteModal)
app.component("AddModal", AddModal)
app.component("EditModal", EditModal)

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
