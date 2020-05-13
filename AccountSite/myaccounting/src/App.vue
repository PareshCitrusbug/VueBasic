<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
require('@/assets/css/bootstrap.min.css');
require('@/assets/css/font-awesome.min.css');
require('@/assets/css/nivo-lightbox.css');
require('@/assets/css/nivo_themes/default/default.css');
require('@/assets/css/templatemo-style.css');

// require('@/assets/js/jquery.js');
// require('@/assets/js/bootstrap.min.js');
// require('@/assets/js/nivo-lightbox.min.js');
// require('@/assets/js/custom.js');

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>

</style>
