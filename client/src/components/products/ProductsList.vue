<template>
  <div class="mt-5 p-3">
    <ul v-for="product in products" :key="product._id">
      <ListItem :product="product"/>
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "ProductsList",
  components: {
    ListItem,
  },
  props: ["products"],
};
</script>

<style scoped>
ul {
  padding: 0;
}
</style>
