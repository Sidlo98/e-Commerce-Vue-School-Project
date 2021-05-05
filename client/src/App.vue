<template>
<div class="wrapper">
  <div class="bg-own">
    <Navbar />
    <router-view />
  </div>
    <Footer />

</div>
</template>
<script>
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
.bg-own {
  background-color: rgba(51, 51, 51, 0.5);
  min-height: calc(100vh - 133px)
}

</style>
