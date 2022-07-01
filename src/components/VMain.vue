<template>
  <div>
    <div class="container">
      <div
        class="row g-4"
        v-if="getMoviesList.length > 0 && getMoviesList !== undefined">
        <h1>Film</h1>
        <div class="col-3" v-for="(movie, i) in getMoviesList" :key="i">
          <VCard :card="movie" />
        </div>
      </div>
      <div
        class="row g-4"
        v-if="getSeriesList.length > 0 && getSeriesList !== undefined"
      >
        <h1>Serie</h1>
        <div class="col-3" v-for="(serie, i) in getSeriesList" :key="i">
          <TheCard :card="serie" />
        </div>
      </div>
      <div v-else>nessun risultato</div>
    </div>
  </div>
</template>

<script>
import { state } from "../store";
import VCard from "./VCard.vue";
export default {
  name: "VMain",
  computed: {
    getMoviesList() {
      return state.movies;
    },
      getSeriesList() {
      return state.series;
    },
  },
  components: { VCard },
};
</script>

<style lang="scss" scoped></style>
