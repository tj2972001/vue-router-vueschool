<template>
  <div class="exp-div">
    <h3>{{ exp.name }}</h3>
    <div class="exp-main">
      <img :src="require(`@/assets/${exp.image}`)" alt="exp.name" />
      <p>{{ exp.description }}</p>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    expId: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(el => el.id === this.id);
    },
    exp() {
      console.log("Destination is " + this.destination.name);
      return this.destination.experiences.find(el => el.slug === this.expId);
    }
  }
};
</script>

<style>
.exp-div {
  margin: 40px 0;
}
.exp-main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.exp-main p {
  max-width: 60%;
}
</style>
