<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Form1 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import Form1 from "./components/Form1.vue";


export default {
  name: "App",
  components: {
    Form1
  }
};
</script>

<style>
</style>
