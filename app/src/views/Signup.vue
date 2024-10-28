
<template>
  <div>
    <!-- Your page content here -->
  </div>
</template>

<script>
export default {
  created() {
    // Redirect the user for Auth0 authentication
    window.location.href = process.env.AUTH0_DOMAIN + '/authorize?' +
      'response_type=code&' +
      'client_id=' + process.env.AUTH0_CLIENT_ID + '&' +
      'redirect_uri=' + process.env.AUTH0_CALLBACK_URL + '&' +
      'scope=openid profile email';
  }
}
</script>
