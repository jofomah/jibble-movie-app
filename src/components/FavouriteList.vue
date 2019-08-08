<template>
  <div>
    <p>Favourite Movies</p>
    <div v-if="favourites.length">
      <div v-for="movie in favourites" v-bind:key="movie.imdbID">
        <span>{{movie.Title}} (Year: {{movie.Year}})</span>
      </div>
    </div>
    <div v-else>
        <span>No favourite movie(s) selected yet</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FavouriteList",
  props: {},
  computed: {
    ...mapGetters({
      favourites: "favouriteMovies"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
