<template>
  <div class="mt-5 p-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="product in products" :key="product._id" class="col">
        <GridItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import GridItem from "./GridItem";
export default {
  name: "ProductsGrid",
  components: {
    GridItem,
  },
  props: ["products"],
};
</script>

<style>

</style>
