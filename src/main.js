import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";
import "./index.css";
import { auth } from './firebase';



const app = createApp(App);
installElementPlus(app);
auth.onAuthStateChanged((user) => {
  app
    .use(store)
    .use(router)
    .mount("#app");
});
