<template>
    <div>
      <h1>Supervision</h1>
    </div>
    <hr />
    <div v-if="item.type == 'COMMON'">
      <Button class="p-button-rounded p-button-secondary" @click="openLink(buildGrafanaUrl(item.job))" style="margin-left: .5em">
          <i class="pi pi-grafana" title="See project on Grafana"/>
      </Button>
    </div>
    <div v-if="item.type == 'K8S'">
      <DataTable :value="item.pods" responsiveLayout="scroll">
        <Column field="name" header="Name"></Column>
        <Column field="port" header="Port"></Column>
        <Column header="Grafana" headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
          <template #body="{data}">
              <Button class="p-button-rounded p-button-secondary" @click="openLink(buildGrafanaUrl(data.name))">
                  <i class="pi pi-grafana" title="See project on Grafana"/>
              </Button>
          </template>
        </Column>
        <Column header="Kubenav" headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
          <template #body="{data}">
              <Button class="p-button-rounded p-button-secondary" @click="openLink(buildKubenavUrl(data.name))">
                  <i class="pi pi-kubenav" title="See project on Kubenav"/>
              </Button>
          </template>
        </Column>
      </DataTable>
    </div>
</template>

<script>
export default {
  name: "ServerSupervisionComponent",
  props: {
      server: Object
  },
  data() {
    return {
      item: this.server
    }
  },
  methods: {
    openLink: function (url) {
        window.open(url, '_blank');
    },
    buildKubenavUrl: function (name) {
      return process.env.VUE_APP_KUBENAV_URL + "resources/workloads/pods/internal/" + name;
    },
    buildGrafanaUrl: function (name) {
      // TODO : Change to real url
      return process.env.VUE_APP_GRAFANA_BASE_URL + "" + name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
