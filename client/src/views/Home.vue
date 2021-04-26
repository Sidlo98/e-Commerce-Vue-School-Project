<template>
  <div>
    <Hero />
    <Service />
    <Counter />
  </div>
</template>

<script>
import Service from "../components/Service";
import Hero from "../components/Hero";
import Counter from "../components/Counter";

export default {
  name: "Home",
  components: {
    Service,
    Hero,
    Counter
  },
};
</script>

<style scoped>

</style>
