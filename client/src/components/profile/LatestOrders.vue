<template>
  <div>
    <div
      class="card p-3 mb-5"
      v-for="order in user.orders"
      :key="order.orderNumber"
    >
      <h4 class="mb-3">Order: {{ order.orderNumber }}</h4>
      <ul>
        <OneOrderCard
          v-for="item in order.products"
          :key="item.product._id"
          :item="item"
        />
      </ul>
      <p>Total: {{ order.totalPrice }} kr</p>
    </div>
  </div>
</template>

<script>
import OneOrderCard from "./OneOrderCard";

export default {
  name: "OrderCard",
  props: ["user"],
  components: {
    OneOrderCard,
  },
};
</script>

<style></style>
