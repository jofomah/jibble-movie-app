<template>
  <div id="app">
    <div class="row">
      <MovieList class="column"/>
      <FavouriteList class="column"/>
    </div>
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'
import FavouriteList from './components/FavouriteList.vue'

export default {
  name: 'app',
  components: {
    MovieList,
    FavouriteList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 50%;
  padding: 10px;
}


@media screen and (max-width: 479px) {
  .column {
    width: 100%;
    padding: 10px;
  }
}

.row:after {
  display: table;
  clear: both;
}
</style>
