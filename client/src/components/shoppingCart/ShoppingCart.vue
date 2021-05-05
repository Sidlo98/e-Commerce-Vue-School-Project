<template>
  <div class="p-3 shadow">

    <div v-if="false">
      
    </div>

    <div v-else>
      <h4 class="text-center">Your cart is empty</h4>
    </div>

    
    <hr />
    <div
      class="d-flex justify-content-between align-items-center flex-column flex-lg-row"
    >
      <p>
        Total
        <span>{{ cartTotalPrice }}</span> kr
        <br />
        <small class="text-muted">Includes Tax</small>
      </p>

      <button class="btn btn-secondary">
        Proceed to checkout
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "ShoppingCart",
  computed: {
    ...mapGetters(['cartTotalPrice'])
  },
  methods: {
    ...mapActions([])
  }
};
</script>

<style></style>
