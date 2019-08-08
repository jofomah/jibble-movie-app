<template>
  <div>
    <div>
      <input type="search" placeholder="type keyword" />
    </div>
    <div v-if="moviesCount > 0">
      <div v-for="movie in movies" v-bind:key="movie.imdbID">
        <Movie :imdbID="movie.imdbID" :title="movie.Title" :year="movie.Year" />
      </div>
      <div>
        <paginate
          :page-count="movieListMeta.per_page"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :click-handler="fetchList"
          :container-class="'pagination'"
          :page-class="'page-item'"
        />
      </div>
    </div>
    <div v-else>Movies not found.</div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Movie from "./Movie.vue";

export default {
  name: "MovieList",
  props: {},
  components: {
    Movie
  },
  created() {
    this.fetchMovies();
  },
  computed: {
    ...mapState({
      movies: "movies",
      movieListMeta: "movieListMeta"
    }),
    ...mapGetters({
      moviesCount: "moviesCount"
    })
  },
  methods: {
    ...mapActions({
      fetchMovies: "fetchMovies"
    }),
    fetchList(page) {
      return this.fetchMovies(page);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
