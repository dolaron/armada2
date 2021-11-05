import { createApp } from 'vue';
import router from './router';
import store from './store';
import VueClickAway from "vue3-click-away";

import App from './App.vue';

createApp(App).use(store).use(router).use(VueClickAway).mount('#app');