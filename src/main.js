import {createApp} from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {ErrorMessage, Field, Form} from 'vee-validate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');