<template>
  <h1 class="separator p-shadow-11">Supervision tools</h1>

  <SupervisionToolListComponent/>
</template>

<script>
import SupervisionToolListComponent from "../components/SupervisionToolListComponent.vue"

export default {
  name: 'SupervisionTools',
  components: {
    SupervisionToolListComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
