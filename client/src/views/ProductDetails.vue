<template>
  <div v-if="product" class=" container mt-5 p-5">
    <div class="row gx-5">
      <div class="col-lg-7">
        <div class="card">
          <img :src="product.image" class="img-fluid rounded" alt="..." />
        </div>
      </div>

      <div
        class="col-lg-5 text-center text-lg-start align-self-start mt-3 mt-lg-0"
      >
        <div class="card p-4">
          <div class="mb-5">
            <h1>{{ product.name }}</h1>
            <hr />
            <p>{{ product.desc }}</p>
          </div>

          <div>
            <p>
              <span class="price-text">{{ product.price }}</span> kr
            </p>
          </div>
          <div
              class="row input-group justify-content-lg-start justify-content-center"
            >
              <button class="btn btn-secondary mb-2 col-lg-6 col-6">AddToCart</button>
              <div class="col-sm-3 col-6">
                <input
                  type="number"
                  min="1"
                  class="form-control border-secondary"
                  v-model="quantity"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "productDetails",
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters(["product"]),
  },
  methods: {
    ...mapActions(["getOneProduct", "cleanOneProduct"]),
  },
  created() {
    this.getOneProduct(this.id);
  },
  destroyed() {
    this.cleanOneProduct();
  },
};
</script>

<style scoped>
.price-text {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
