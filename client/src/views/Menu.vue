<template>
  <div>
    <h1 class="text-center mt-5">Our Menu</h1>
    <div class="mt-5 ">
      <h3>Smalls</h3>
      <hr />

      <div class="item mb-2 d-flex" v-for="item in smalls" :key="item.id">
        <button class="btn btn-add btn-rounded">+</button>
        <router-link :to="'/menu/' + item.name" class="link">
          <div
            class="d-flex justify-content-between border-bottom p-2 align-items-center rounded  hover-shadow"
          >
            <h4>{{ item.name }}</h4>
            <span>{{ item.price }}kr</span>
          </div>
        </router-link>
      </div>

      <h3>Mains</h3>
      <hr />

      <div class="item mb-2 d-flex" v-for="item in mains" :key="item.id">
        <button
          class="btn btn-add btn-rounded"
          :style="{ 'background-color': btnColors }"
        >
          +
        </button>
        <router-link :to="'/menu/' + item.name" class="link">
          <div
            class="d-flex justify-content-between border-bottom p-2 align-items-center rounded  hover-shadow"
          >
            <h4>{{ item.name }}</h4>
            <span>{{ item.price }}kr</span>
          </div>
        </router-link>
      </div>

      <h3>Desserts</h3>
      <hr />

      <div class="item mb-2 d-flex" v-for="item in desserts" :key="item.id">
        <button
          class="btn btn-add btn-rounded"
          :style="{ 'background-color': btnColors }"
        >
          +
        </button>
        <router-link :to="'/menu/' + item.name" class="link">
          <div
            class="d-flex justify-content-between border-bottom p-2 align-items-center rounded  hover-shadow"
          >
            <h4>{{ item.name }}</h4>
            <span>{{ item.price }}kr</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Menu",
  computed: {
    ...mapGetters(["menuItems"]),

    smalls() {
      return this.menuItems.filter((item) => item.category === "Small");
    },
    mains() {
      return this.menuItems.filter((item) => item.category === "Main");
    },
    desserts() {
      return this.menuItems.filter((item) => item.category === "Dessert");
    },
  },
  methods: {
    ...mapActions(["getMenuItems"]),
  },
  created() {
    this.getMenuItems();
  },
};
</script>

<style scoped>
.item {
  width: 95%;
  margin-left: auto;
}
.item a {
  color: #000;
}
.btn-add {
  flex: 1;
  padding: 1rem;
  font-size: 2rem;
  line-height: 0;
  background-color: #89c947;
}
.link {
  flex: 50;
  margin-left: 1rem;
}
</style>
