<template>
  <div class="server-list-component">
    <div class="p-grid p-ai-stretch vertical-container">
        <div class="p-col-4" v-for="target in serverList" :key="target">
            <KubernetesServerComponent :server="target" v-if="target.job == 'k8s'"/>
            <CommonServerComponent :server="target" v-if="target.job != 'k8s'"/>
        </div>
    </div>
  </div>
</template>

<script>
import KubernetesServerComponent from "./KubernetesServerComponent.vue";
import CommonServerComponent from "./CommonServerComponent.vue";

export default {
  name: 'ServerListComponent',
  components: {
    KubernetesServerComponent,
    CommonServerComponent
  },
  props: {
    serverList: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>