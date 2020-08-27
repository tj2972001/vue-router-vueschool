<template>
  <div id="app">
    <TheNavigation />
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import TheNavigation from "../src/components/TheNavigation";
export default {
  components: {
    TheNavigation
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  margin-right: 20px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.travel-app-active-link {
  color: #ad0ea5;
}
</style>
