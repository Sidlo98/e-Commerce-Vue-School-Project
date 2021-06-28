<template>
  <div class="container mt-5 pb-5">
    <div class="d-flex justify-content-center">
      <h1 class="text-center text-dark mb-3 newsHeading border-secondary">
        New shoes in store, buy now!
      </h1>
    </div>
    <Carousel :products="latestProducts" />

    <div class="card mt-3 p-3">
      <div class="card-body">
        <h2 class="card-title text-center">Become a member today!</h2>
        <p class="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          possimus cum blanditiis dolor esse quas impedit numquam debitis veniam
          at, sapiente accusamus odit eaque nobis, recusandae earum nesciunt
          necessitatibus, labore inventore adipisci illum laboriosam explicabo.
          Deserunt, ab. Possimus molestias suscipit fugiat ut officiis voluptate
          blanditiis consectetur saepe sint unde, maiores aliquam, voluptates
          incidunt eos veniam mollitia omnis sunt sed aperiam minus atque dolore
          quia vitae laboriosam? Eligendi magni expedita perferendis. Voluptates
          sit doloribus ratione, aperiam iure obcaecati quod eveniet nihil,
          nesciunt est fuga. Error deleniti natus odit quasi debitis officiis
          dignissimos ea placeat, alias eos quia quidem sit expedita esse?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Carousel from "client\src\components\landingpage\Carousel.vue";
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

<style scoped>
.newsHeading {
  font-size: 4rem !important;
  display: inline-block;
  border-bottom: 4px solid;
}
</style>
