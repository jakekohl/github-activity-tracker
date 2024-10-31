import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
createAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: process.env.AUTH0_REDIRECT_URI
  }
})

app.mount('#app');
