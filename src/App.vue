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
  background-color: #141414;
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

hr {
  height:1px;
  border-width:0;
  color:#383838;
  background-color:#383838;
}
</style>
