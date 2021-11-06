<template>
  <h1 class="separator p-shadow-11">Servers</h1>
  
  <ServerListComponent/>
</template>

<script>
import ServerListComponent from "../components/ServerListComponent.vue"

export default {
  name: 'Servers',
  components: {
    ServerListComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
