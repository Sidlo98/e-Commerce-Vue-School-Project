<template>
  <div class="bg-own">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/navigation/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>
<style>
.bg-own {
  background-color: rgba(51, 51, 51, 0.5)
}

</style>
