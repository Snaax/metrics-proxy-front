<template>
    <div>
      <h1>Status</h1>
    </div>
    <hr />
    <div v-if="item.type == 'COMMON'">
      <div class="p-grid">
        <div class="p-col-6">Server</div>
        <div class="p-col-6"><i :class="'pi pi-chevron-' + getStatus(item.status)"></i></div>
      </div>
    </div>
    <div v-if="item.type == 'K8S'">
      <DataTable :value="item.pods" responsiveLayout="scroll">
          <Column field="name" header="Name"></Column>
          <Column field="status" header="Status">
            <template #body="{data}">
              <i :class="'pi pi-chevron-' + getStatus(data)"></i>
            </template>
          </Column>
      </DataTable>
    </div>
</template>

<script>
export default {
  name: "ServerStatusComponent",
  props: {
      server: Object
  },
  data() {
    return {
      item: this.server
    }
  },
  methods: {
    getStatus: function (metricValue) {
      return metricValue == 0 ? "down" : "up";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
