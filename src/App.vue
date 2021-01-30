<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Spine</router-link> |
      <router-link to="/add-spine">Add</router-link>
    </div>
    <div class="container">
    <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  color: #2c3e50;
}
body{
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }
.container{
  max-width: 1100px;
  margin:auto;
  overflow: auto;
  padding: 0 2rem;
}
#nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
