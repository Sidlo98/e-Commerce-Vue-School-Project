<template>
  <div class="container mt-5">
    <h1 class="text-center text-dark mb-3">New shoes in store, buy now!</h1>
    <Carousel :products="latestProducts" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Carousel from "../components/landingPage/Carousel";
export default {
  name: "Home",
  components: {
    Carousel,
  },
  computed: {
    ...mapGetters(["latestProducts"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
