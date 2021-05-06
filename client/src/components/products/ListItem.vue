<template>
  <li>
    <div class="row g-0 bg-light rounded">
      <div class="col-md-4 img-rounded">
        <div
          class="bg-image hover-overlay ripple img-rounded"
          data-mdb-ripple-color="light"
        >
          <img :src="product.image" class="img-fluid img-rounded" />
          <router-link
            :to="{ name: 'ProductDetails', params: { id: product._id } }"
          >
            <div
              class="mask img-rounded"
              style="background-color: rgba(251, 251, 251, 0.15)"
            ></div>
          </router-link>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">
            {{ product.short }}
          </p>
          <p class="mt-auto">
            <span class="price-text">{{ product.price }}</span> kr
          </p>
        </div>
        <button
          @click="addProductToCart({ product, quantity })"
          type="button"
          class="btn btn-secondary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ListItem",
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
li {
  list-style: none;
}
.price-text {
  font-size: 1.5rem;
  font-weight: 600;
}
.img-rounded {
  border-radius: 5px 0px 0px 5px;
}
.btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.col-md-8 {
  position: relative;
}
</style>
