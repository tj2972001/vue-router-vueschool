<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="{ name: 'destinationDetail', params: { id: destination.id } }">
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link :to="{ name: 'destinationDetail', params: { id: destination.id } }">
            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
export default {
  name: "Home",
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
.destinations {
  display: flex;
  justify-content: space-around;
}
</style>
