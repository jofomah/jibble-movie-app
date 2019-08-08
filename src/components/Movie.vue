<template>
  <div>
    <div>index position</div>
    <div>{{imdbID}}</div>
    <div>{{title}}</div>
    <div>{{year}}</div>
    <div>
      <button>Favourite</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    imdbID: String,
    title: String,
    year: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
