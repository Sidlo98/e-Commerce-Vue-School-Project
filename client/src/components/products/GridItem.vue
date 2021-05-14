<template>
  <div class="card h-100">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img :src="product.image" class="img-fluid maxh" />
      <router-link
        :to="{ name: 'ProductDetails', params: { id: product._id } }"
      >
        <div
          class="mask"
          style="background-color: rgba(251, 251, 251, 0.15)"
        ></div>
      </router-link>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.short }}
      </p>
      <hr />
      <div class="d-flex justify-content-between ">
        <p class="text">
          <span class="price-text">
            {{ product.price }}
          </span>
          kr
        </p>
        <button
          @click="addProductToCart({ product, quantity })"
          class="btn btn-sm btn-secondary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "GridItem",
  props: ["product"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["addProductToCart"]),
  },
};
</script>

<style scoped>
.price-text {
  font-size: 1.5rem;
  font-weight: 600;
}
.btn {
  height: 40px;
}
.maxh {
  height: 225px;
  width: 100%;
}
</style>
