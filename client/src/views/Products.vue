<template>
  <div class="container">
    <div class="d-flex pt-3 p-1 justify-content-between">
      <div>
        <div class="btn-group">
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option1"
            autocomplete="off"
            @click="setComp('Grid')"
            :checked="comp === 'Grid'"
          />
          <label class="btn btn-secondary" for="option1">Grid</label>

          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option2"
            autocomplete="off"
            @click="setComp('List')"
            :checked="comp === 'List'"
          />
          <label class="btn btn-secondary" for="option2">List</label>
        </div>
      </div>

      <div>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <div class="form-outline bg-light rounded">
              <input type="search" class="form-control" />
            </div>
            <button type="submit" class="btn btn-secondary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="products">
      <component :is="comp" :products="products"></component>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import Grid from "../components/products/ProductsGrid";
import List from "../components/products/ProductsList";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  components: {
    Grid,
    List,
  },
  computed: {
    ...mapGetters(["products", "comp"]),
  },
  methods: {
    ...mapActions(["getProducts", "setComp"]),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
