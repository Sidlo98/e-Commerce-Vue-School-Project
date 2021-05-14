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
  min-height: calc(100vh - 133px);
  background-color: #7a726f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23362f2f' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%238a29aa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23612f3b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%238b2ab0' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23882855' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%238c2bb6' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23a81d7f' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%238d2dbd' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23b91eb8' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%238e2ec3' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23b23cfd' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%238e30ca' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
