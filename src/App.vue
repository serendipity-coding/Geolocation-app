<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  background-image: url("./assets/peek.png");
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  background-size: 100%;
  background-color: rgb(145, 175, 195);
}
</style>
