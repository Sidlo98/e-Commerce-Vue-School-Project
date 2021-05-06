<template>
  <div>
    <div
      class="d-flex p-2 d-flex justify-content-between align-items-center flex-column flex-md-row"
    >
      <div class="d-flex align-items-center flex-column flex-md-row">
        <img :src="item.product.image" alt="" class="img-fluid image-width" />
        <div class="d-flex flex-column ps-3">
          <strong>{{ item.product.name }}</strong>

          <small>{{ item.quantity }} x {{ item.product.price }}</small>
        </div>
      </div>
      <div class="d-flex">
        <div class="btn-group btn-group-sm me-2" role="group">
          <button
            class="btn btn-outline-secondary"
            @click.stop="removeOneProductFromCart(item.product)"
          >
            -
          </button>
          <button
            class="btn btn-secondary"
            @click.stop="addProductToCart({ product: item.product, quantity })"
          >
            +
          </button>
        </div>
        <button
          class="btn btn-danger btn-sm"
          @click.stop="removeProductFromCart(item.product)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",
  props: ["item"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions([
      "addProductToCart",
      "removeProductFromCart",
      "removeOneProductFromCart",
    ]),
  },
};
</script>

<style scoped>
.image-width {
  width: 100px;
}
</style>
