<template>
  <div>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="require(`@/assets/${destination.image}`)" alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div v-for="exp in destination.experiences" :key="exp.slug" class="card">
          <router-link :to="{ name: 'experienceDetail', params: { expId: exp.slug } }">
            <img :src="require(`@/assets/${exp.image}`)" alt="exp.name" />
            <div>{{ exp.name }}</div>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "../store";
export default {
  // data() {
  //   return {
  //     destinationId: this.$route.params.id
  //   };
  // },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(destination => destination.id === this.id);
    }
  }
};
</script>
<style scoped>
.destination-details {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.destination-details p {
  max-width: 70%;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cards div {
  margin-top: 8px;
}
</style>
