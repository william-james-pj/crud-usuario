import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHome,
    faUsersCog,
    faUserPlus,
    faUserMinus,
    faUserEdit
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faUsersCog, faUserPlus, faUserMinus, faUserEdit);

/* eslint-disable no-new */
createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
