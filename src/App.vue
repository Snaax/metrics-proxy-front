<template>
  <h1>Factory portal</h1>
  
  <div class="menubar">
    <Menubar :model="items" />
  </div>

  <router-view/>
</template>

<script>
import items from "./assets/data/menu.json";

export default {
  name: 'App',
  data() {
    return {
      items: items
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #17212f;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.separator {
  padding: 0.5em;
}
</style>
