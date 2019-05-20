<template>
  <div id="app">
    <h1>Word Search Toolset</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  background: rgb(80, 57, 122);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #66a9f1;
  margin-top: 60px;
  padding: 1rem 2rem;
}
</style>
