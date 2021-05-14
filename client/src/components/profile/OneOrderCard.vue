<template>
  <li>
    <div class="d-flex justify-content-between align-items-center">
      <p>{{ item.product.name }} X {{ item.quantity }}</p>
      <p>{{ item.product.price * item.quantity }} kr</p>
    </div>
    <hr />
  </li>
</template>

<script>
export default {
  name: "OneOrderCard",
  props: ["item"],
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
