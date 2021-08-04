import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";
import "./index.css";
import { auth } from "./firebase";

let app;

auth.onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App);
    installElementPlus(app);
    app
      .use(store)
      .use(router)
      .mount("#app");
  }
});
