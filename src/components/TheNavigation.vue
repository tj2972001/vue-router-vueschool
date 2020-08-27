<template>
  <div id="nav">
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.id">
        <router-link
          :to="{ name: 'destinationDetail', params: { id: destination.id } }"
        >{{ destination.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style>
li {
  float: left;
}
</style>
