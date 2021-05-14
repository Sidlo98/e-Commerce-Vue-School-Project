<template>
  <div class="container mt-5 pb-5">
    <ProfileCard :user="activeUser" />

    <LatestOrders :user="activeUser" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProfileCard from "../components/profile/ProfileCard";
import LatestOrders from "../components/profile/LatestOrders";

export default {
  name: "Profile",
  components: {
    ProfileCard,
    LatestOrders,
  },
  computed: {
    ...mapGetters(["activeUser"]),
  },
  methods: {
    ...mapActions(["updateUser"]),
  },
  created() {
    this.updateUser();
  },
};
</script>

<style></style>
