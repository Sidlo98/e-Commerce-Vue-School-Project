<template>
  <div class="card d-flex flex-md-row align-items-center mb-3">
    <div
      class="bg-image hover-overlay ripple col-md-6 col-12"
      data-mdb-ripple-color="light"
    >
      <img :src="item.product.image" class="card-img-top" />
      <router-link
        :to="{ name: 'ProductDetails', params: { id: item.product._id } }"
      >
        <div
          class="mask"
          style="background-color: rgba(251, 251, 251, 0.15)"
        ></div>
      </router-link>
    </div>
    <div class="card-body">
      <div
        class="d-flex justify-content-between align-items-center flex-column flex-lg-row"
      >
        <div class="d-flex flex-column">
          <strong
            >{{ item.product.name }} || {{ item.product.price }} kr</strong
          >
          <small> x{{ item.quantity }} = {{ totalPriceItem }} kr</small>
          <small class="text-muted">Includes Tax</small>
        </div>

        <div class="d-flex">
          <div class="btn-group btn-group me-2" role="group">
            <button
              class="btn btn-outline-secondary"
              @click.stop="removeOneProductFromCart(item.product)"
            >
              -
            </button>
            <button
              class="btn btn-secondary"
              @click.stop="
                addProductToCart({ product: item.product, quantity })
              "
            >
              +
            </button>
          </div>
          <button
            class="btn btn-danger"
            @click.stop="removeProductFromCart(item.product)"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CheckOutCard",
  props: ["item"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    totalPriceItem() {
      return this.item.product.price * this.item.quantity;
    },
  },
  methods: {
    ...mapActions([
      "removeOneProductFromCart",
      "addProductToCart",
      "removeProductFromCart",
    ]),
  },
};
</script>

<style scoped></style>
