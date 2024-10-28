<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Button from 'primevue/button';


const route = useRoute();

const authUrl = computed(() => `https://user.${process.env.API_BASE}/auth/auth0?returnUrl=${window.location.origin}${route.query.redirect || '/'}`);
</script>

<template>
  <main>
    <h1>Login</h1>
    <a :href="authUrl">
      <Button label="Login" />
    </a>
  </main>
</template>