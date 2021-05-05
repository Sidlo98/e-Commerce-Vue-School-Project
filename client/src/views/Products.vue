<template>
  <div class="container pb-5">
    <div
      class="d-flex pt-3 p-1 justify-content-between flex-column  flex-sm-row align-items-center"
    >
      <div>
        <div class="btn-group mb-3">
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

      <div class="mb-3">
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <div class="form-outline bg-light rounded">
              <input id="search" type="search" class="form-control" />
            </div>
            <button type="submit" class="btn btn-secondary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="products">
      <component :is="comp" :products="filterdProducts"></component>
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
    ...mapGetters(["filterdProducts", "comp", "products"]),
  },
  methods: {
    ...mapActions(["getProducts", "setComp", "setSearchVal", "cleanSearchVal"]),
    handleSubmit(e) {
      this.setSearchVal(e.target.search.value);
    },
  },
  created() {
    this.getProducts();
  },
  destroyed() {
    this.cleanSearchVal();
  },
};
</script>

<style></style>
