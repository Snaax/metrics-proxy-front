<template>
    <div>
      <h1>Detail</h1>
    </div>
    <hr />
    <div class="p-grid">
      <div class="p-col-6">Type</div>
      <div class="p-col-6 p-text-capitalize">{{ item.type }}</div>
      <div class="p-col-6" v-if="item.version != null">Version</div>
      <div class="p-col-6 p-text-capitalize" v-if="item.version != null">{{ item.version }}</div>
      <div class="p-col-6" v-if="item.component != null">Component</div>
      <div class="p-col-6 p-text-capitalize" v-if="item.component != null">{{ item.component }}</div>
      <div class="p-col-6" v-if="item.managedBy != null">Managed by</div>
      <div class="p-col-6 p-text-capitalize" v-if="item.managedBy != null">{{ item.managedBy }}</div>
      <div class="p-col-6" v-if="item.partOf != null">Group</div>
      <div class="p-col-6 p-text-capitalize" v-if="item.partOf != null">{{ item.partOf }}</div>
    </div>
</template>

<script>
export default {
  name: "ServerDetailComponent",
  props: {
      server: Object
  },
  data() {
    return {
      item: this.server
    }
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
