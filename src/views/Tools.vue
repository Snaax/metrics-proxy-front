<template>
  <h1 class="separator p-shadow-11">Tools</h1>

  <ToolListComponent/>
</template>

<script>
import ToolListComponent from "../components/ToolListComponent.vue"

export default {
  name: 'Tools',
  components: {
    ToolListComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
